"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Upload, Download, Grid3X3, Info, CheckCircle, AlertTriangle, Star, Users, Zap } from "lucide-react"
import JSZip from "jszip"
import Link from "next/link"

// Configuration constants
const HORIZONTAL_SLICES = 3
const SLICE_OUTPUT_WIDTH = 1080
const SLICE_OUTPUT_HEIGHT = 1350
const HORIZONTAL_OVERLAP = 65

type Step = "input" | "upload" | "preview" | "processing" | "download"

export default function InstagramGridSlicer() {
  const [currentStep, setCurrentStep] = useState<Step>("input")
  const [rowCount, setRowCount] = useState<number>(0)
  const [uploadedImage, setUploadedImage] = useState<HTMLImageElement | null>(null)
  const [requiredWidth, setRequiredWidth] = useState<number>(0)
  const [requiredHeight, setRequiredHeight] = useState<number>(0)
  const [validationError, setValidationError] = useState<string>("")
  const [processingProgress, setProcessingProgress] = useState<number>(0)
  const [processingText, setProcessingText] = useState<string>("")
  const [downloadUrl, setDownloadUrl] = useState<string>("")
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const fileInputRef = useRef<HTMLInputElement>(null)

  const calculateRequiredDimensions = (rows: number) => {
    const width = HORIZONTAL_SLICES * SLICE_OUTPUT_WIDTH - (HORIZONTAL_SLICES - 1) * HORIZONTAL_OVERLAP
    const height = rows * SLICE_OUTPUT_HEIGHT
    return { width, height }
  }

  const handleRowCountSubmit = () => {
    if (rowCount > 0) {
      const dims = calculateRequiredDimensions(rowCount)
      setRequiredWidth(dims.width)
      setRequiredHeight(dims.height)
      setValidationError("")
      setCurrentStep("upload")
    }
  }

  const generatePreviewGrid = useCallback(
    (image: HTMLImageElement) => {
      const previews: string[] = []
      let currentY = 0

      for (let r = 0; r < rowCount; r++) {
        let currentX = 0
        for (let c = 0; c < HORIZONTAL_SLICES; c++) {
          const canvas = document.createElement("canvas")
          const previewWidth = 108
          const previewHeight = 135
          canvas.width = previewWidth
          canvas.height = previewHeight

          const ctx = canvas.getContext("2d")
          if (ctx) {
            ctx.drawImage(
              image,
              currentX,
              currentY,
              SLICE_OUTPUT_WIDTH,
              SLICE_OUTPUT_HEIGHT,
              0,
              0,
              previewWidth,
              previewHeight,
            )
            previews.push(canvas.toDataURL("image/jpeg", 0.8))
          }
          currentX += SLICE_OUTPUT_WIDTH - HORIZONTAL_OVERLAP
        }
        currentY += SLICE_OUTPUT_HEIGHT
      }

      setPreviewImages(previews)
    },
    [rowCount],
  )

  const handleFileUpload = (file: File) => {
    if (!file || !file.type.startsWith("image/")) {
      setValidationError("Harap pilih file gambar yang valid.")
      return
    }

    setValidationError("Memvalidasi gambar...")
    const reader = new FileReader()

    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        if (img.naturalWidth === requiredWidth && img.naturalHeight === requiredHeight) {
          setUploadedImage(img)
          generatePreviewGrid(img)
          setValidationError("")
          setTimeout(() => setCurrentStep("preview"), 500)
        } else {
          setValidationError(
            `Validasi Gagal! Ukuran yang diperlukan: ${requiredWidth}x${requiredHeight} px. Ukuran gambar Anda: ${img.naturalWidth}x${img.naturalHeight} px.`,
          )
          setUploadedImage(null)
          if (fileInputRef.current) fileInputRef.current.value = ""
        }
      }
      img.onerror = () => {
        setValidationError("Gagal memuat file gambar. Pastikan file tidak rusak.")
        if (fileInputRef.current) fileInputRef.current.value = ""
      }
      img.src = e.target?.result as string
    }

    reader.readAsDataURL(file)
  }

  const processAndZipImages = async () => {
    if (!uploadedImage) return

    setCurrentStep("processing")
    const zip = new JSZip()
    const totalSlices = rowCount * HORIZONTAL_SLICES
    let sliceCounter = 0
    let currentY = 0

    for (let r = 0; r < rowCount; r++) {
      let currentX = 0
      for (let c = 0; c < HORIZONTAL_SLICES; c++) {
        sliceCounter++
        setProcessingText(`Memproses potongan ${sliceCounter} dari ${totalSlices}...`)

        const canvas = document.createElement("canvas")
        canvas.width = SLICE_OUTPUT_WIDTH
        canvas.height = SLICE_OUTPUT_HEIGHT
        const ctx = canvas.getContext("2d")

        if (ctx) {
          ctx.drawImage(
            uploadedImage,
            currentX,
            currentY,
            SLICE_OUTPUT_WIDTH,
            SLICE_OUTPUT_HEIGHT,
            0,
            0,
            SLICE_OUTPUT_WIDTH,
            SLICE_OUTPUT_HEIGHT,
          )

          const blob = await new Promise<Blob>((resolve) => canvas.toBlob((blob) => resolve(blob!), "image/jpeg", 0.95))

          zip.file(`slice_row-${r + 1}_col-${c + 1}.jpg`, blob)
        }

        const percentComplete = (sliceCounter / totalSlices) * 100
        setProcessingProgress(percentComplete)

        currentX += SLICE_OUTPUT_WIDTH - HORIZONTAL_OVERLAP
      }
      currentY += SLICE_OUTPUT_HEIGHT
    }

    setProcessingText("Membuat file .zip...")
    const zipBlob = await zip.generateAsync({ type: "blob" })
    const url = URL.createObjectURL(zipBlob)
    setDownloadUrl(url)
    setCurrentStep("download")
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileUpload(files[0])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* SEO Header Section */}
      <header className="text-center py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Grid3X3 className="h-10 w-10 text-purple-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Auto Grid Slicer</h1>
          </div>
          <p className="text-xl text-slate-300 mb-6">
            Tool Instagram Grid Maker Gratis - Potong Gambar Panorama Jadi Grid Sempurna
          </p>

          {/* Features Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <Zap className="h-5 w-5" />
              <span>Cepat & Mudah</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-400">
              <Star className="h-5 w-5" />
              <span>100% Gratis</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-purple-400">
              <Users className="h-5 w-5" />
              <span>Tanpa Daftar</span>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 pb-8">
        <div className="max-w-md mx-auto space-y-6">
          {/* Step 1: Input Rows */}
          {currentStep === "input" && (
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    1
                  </span>
                  <span>Jumlah Baris Grid Instagram</span>
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Tentukan berapa baris yang diinginkan untuk grid Instagram Anda (contoh: 4 untuk grid 4x3)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  type="number"
                  placeholder="Contoh: 4 untuk grid 4x3"
                  min="1"
                  value={rowCount || ""}
                  onChange={(e) => setRowCount(Number.parseInt(e.target.value) || 0)}
                  className="bg-slate-700 border-slate-600 text-white text-center text-lg"
                  aria-label="Masukkan jumlah baris untuk grid Instagram"
                />
                <Button
                  onClick={handleRowCountSubmit}
                  disabled={rowCount <= 0}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Lanjutkan ke Upload Gambar
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Upload Image */}
          {currentStep === "upload" && (
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    2
                  </span>
                  <span>Upload Gambar Panorama</span>
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Upload gambar panorama dengan ukuran yang tepat untuk dipotong menjadi grid Instagram
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Privacy Notice */}
                <Alert className="bg-yellow-500/10 border-yellow-500/20">
                  <Info className="h-4 w-4 text-yellow-500" />
                  <AlertDescription className="text-yellow-200">
                    🔒 Foto kamu tidak akan disimpan di server. Foto hanya digunakan untuk proses saja.
                  </AlertDescription>
                </Alert>

                {/* Dimension Info */}
                <Alert className="bg-blue-500/10 border-blue-500/20">
                  <AlertDescription className="text-blue-200">
                    <strong>Ukuran Gambar yang Diperlukan:</strong>
                    <br />
                    Lebar: <span className="font-bold text-white">{requiredWidth} px</span>
                    <br />
                    Tinggi: <span className="font-bold text-white">{requiredHeight} px</span>
                  </AlertDescription>
                </Alert>

                {/* File Upload Area */}
                <div
                  className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-purple-500 transition-colors cursor-pointer"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  role="button"
                  tabIndex={0}
                  aria-label="Area upload gambar - klik atau drag and drop"
                >
                  <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                  <p className="text-slate-300 mb-2">Klik atau tarik & lepas gambar panorama</p>
                  <p className="text-sm text-slate-500">Format yang didukung: JPG, PNG, WebP</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                    className="hidden"
                    aria-label="Input file gambar"
                  />
                </div>

                {validationError && (
                  <Alert className="bg-red-500/10 border-red-500/20">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <AlertDescription className="text-red-200">{validationError}</AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 3: Preview Grid */}
          {currentStep === "preview" && (
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    3
                  </span>
                  <span>Preview Grid Instagram</span>
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Lihat bagaimana gambar akan dipotong menjadi grid Instagram
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-2 bg-black/20 p-3 rounded-lg">
                  {previewImages.map((src, index) => (
                    <img
                      key={index}
                      src={src || "/placeholder.svg"}
                      alt={`Preview potongan grid Instagram ${index + 1}`}
                      className="w-full h-auto rounded-md"
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-400 text-center">
                  Preview kualitas rendah. Hasil akhir akan beresolusi penuh (1080x1350px per potongan).
                </p>
                <Button onClick={processAndZipImages} className="w-full bg-purple-600 hover:bg-purple-700">
                  Proses & Download Grid Instagram
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Processing */}
          {currentStep === "processing" && (
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    4
                  </span>
                  <span>Memproses Grid Instagram...</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <Progress value={processingProgress} className="w-full" />
                <p className="text-slate-300">{processingText}</p>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Download */}
          {currentStep === "download" && (
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-green-400">Grid Instagram Siap!</span>
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Grid Instagram Anda telah berhasil dibuat dan siap untuk diupload
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <a
                    href={downloadUrl}
                    download={`instagram_grid_${rowCount}x${HORIZONTAL_SLICES}_${Date.now()}.zip`}
                    className="flex items-center space-x-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Grid Instagram (ZIP)</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setCurrentStep("input")
                    setRowCount(0)
                    setUploadedImage(null)
                    setPreviewImages([])
                    setValidationError("")
                    setProcessingProgress(0)
                    if (fileInputRef.current) fileInputRef.current.value = ""
                  }}
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Buat Grid Instagram Baru
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* SEO Content Section */}
        <section className="max-w-4xl mx-auto mt-16 px-4">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Cara Membuat Grid Instagram yang Menarik dengan Auto Grid Slicer
            </h2>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed">
                <strong>Auto Grid Slicer</strong> adalah tool gratis terbaik untuk membuat grid Instagram yang
                menakjubkan. Dengan tool ini, Anda dapat dengan mudah memotong gambar panorama menjadi beberapa bagian
                yang sempurna untuk feed Instagram Anda.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Mengapa Menggunakan Grid Instagram?</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Membuat feed Instagram lebih menarik dan profesional</li>
                <li>• Meningkatkan engagement dan followers</li>
                <li>• Cocok untuk bisnis, personal branding, dan konten kreatif</li>
                <li>• Membantu storytelling visual yang lebih kuat</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Fitur Unggulan Auto Grid Slicer</h3>
              <ul className="text-slate-300 space-y-2">
                <li>
                  • <strong>100% Gratis</strong> - Tidak ada biaya tersembunyi
                </li>
                <li>
                  • <strong>Tanpa Watermark</strong> - Hasil bersih tanpa logo
                </li>
                <li>
                  • <strong>Kualitas Tinggi</strong> - Output 1080x1350px per potongan
                </li>
                <li>
                  • <strong>Privacy Terjamin</strong> - Gambar tidak disimpan di server
                </li>
                <li>
                  • <strong>Mudah Digunakan</strong> - Interface yang user-friendly
                </li>
                <li>
                  • <strong>Support Mobile</strong> - Bisa digunakan di HP
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Cara Menggunakan Tool Grid Instagram</h3>
              <ol className="text-slate-300 space-y-2">
                <li>1. Tentukan jumlah baris yang diinginkan (contoh: 4 untuk grid 4x3)</li>
                <li>2. Upload gambar panorama dengan ukuran yang sesuai</li>
                <li>3. Preview hasil potongan grid</li>
                <li>4. Download file ZIP berisi semua potongan</li>
                <li>5. Upload ke Instagram sesuai urutan</li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Grid3X3 className="h-6 w-6 text-purple-400" />
              <span className="text-white font-semibold">Auto Grid Slicer</span>
            </div>
            <p className="text-slate-400">Tool Instagram Grid Maker terbaik untuk membuat feed yang menakjubkan</p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link href="/tentang" className="text-slate-400 hover:text-white transition-colors">
                Tentang
              </Link>
              <Link href="/cara-penggunaan" className="text-slate-400 hover:text-white transition-colors">
                Cara Penggunaan
              </Link>
              <Link href="/tips-instagram" className="text-slate-400 hover:text-white transition-colors">
                Tips Instagram
              </Link>
            </div>
            <p className="text-xs text-slate-500">
              © 2024 Auto Grid Slicer. Tool gratis untuk membuat grid Instagram yang sempurna.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
