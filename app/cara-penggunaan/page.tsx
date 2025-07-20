import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Upload, Eye, Download, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Cara Penggunaan Auto Grid Slicer - Tutorial Lengkap Instagram Grid",
  description:
    "Panduan lengkap cara menggunakan Auto Grid Slicer untuk membuat grid Instagram yang menakjubkan. Tutorial step-by-step dengan gambar dan tips.",
  keywords: [
    "cara menggunakan grid slicer",
    "tutorial instagram grid",
    "panduan grid maker",
    "langkah membuat grid instagram",
  ],
}

export default function CaraPenggunaanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Tool
            </Button>
          </Link>

          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-white">Cara Penggunaan Auto Grid Slicer</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Panduan lengkap untuk membuat grid Instagram yang menakjubkan dalam 4 langkah mudah
            </p>
          </div>
        </div>

        {/* Tutorial Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-3">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  <Settings className="h-5 w-5" />
                </div>
                <span>Langkah 1: Tentukan Jumlah Baris</span>
              </CardTitle>
              <CardDescription className="text-slate-300">
                Pilih berapa baris yang Anda inginkan untuk grid Instagram
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-slate-300 space-y-3">
                <p>• Masukkan angka sesuai keinginan (contoh: 4 untuk grid 4x3)</p>
                <p>• Grid akan selalu memiliki 3 kolom (sesuai format Instagram)</p>
                <p>• Semakin banyak baris, semakin panjang gambar panorama yang dibutuhkan</p>
                <p>• Rekomendasi: 3-6 baris untuk hasil terbaik</p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h4 className="text-blue-300 font-semibold mb-2">💡 Tips:</h4>
                <p className="text-blue-200 text-sm">
                  Grid 3x3 (3 baris) cocok untuk landscape, sedangkan 4x3 atau 5x3 cocok untuk gambar yang lebih tinggi.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-3">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  <Upload className="h-5 w-5" />
                </div>
                <span>Langkah 2: Upload Gambar Panorama</span>
              </CardTitle>
              <CardDescription className="text-slate-300">
                Upload gambar dengan ukuran yang tepat sesuai petunjuk
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-slate-300 space-y-3">
                <p>• Tool akan menampilkan ukuran gambar yang diperlukan</p>
                <p>• Pastikan gambar Anda memiliki ukuran yang persis sama</p>
                <p>• Gunakan editor foto untuk resize jika perlu</p>
                <p>• Format yang didukung: JPG, PNG, WebP</p>
                <p>• Anda bisa drag & drop atau klik untuk memilih file</p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <h4 className="text-yellow-300 font-semibold mb-2">🔒 Keamanan:</h4>
                <p className="text-yellow-200 text-sm">
                  Gambar Anda tidak akan disimpan di server. Semua proses dilakukan di browser Anda sendiri.
                </p>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <h4 className="text-green-300 font-semibold mb-2">📐 Cara Mengetahui Ukuran Gambar:</h4>
                <ul className="text-green-200 text-sm space-y-1">
                  <li>• Windows: Klik kanan gambar → Properties → Details</li>
                  <li>• Mac: Klik gambar → Get Info</li>
                  <li>• Online: Gunakan tool seperti "Image Size Checker"</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-3">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  <Eye className="h-5 w-5" />
                </div>
                <span>Langkah 3: Preview & Proses</span>
              </CardTitle>
              <CardDescription className="text-slate-300">
                Lihat preview hasil potongan sebelum memproses
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-slate-300 space-y-3">
                <p>• Preview akan menampilkan bagaimana gambar akan dipotong</p>
                <p>• Periksa apakah potongan sudah sesuai keinginan</p>
                <p>• Preview menggunakan kualitas rendah untuk kecepatan</p>
                <p>• Hasil akhir akan beresolusi penuh (1080x1350px per potongan)</p>
                <p>• Klik "Proses" jika sudah puas dengan preview</p>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <h4 className="text-purple-300 font-semibold mb-2">🎨 Tips Komposisi:</h4>
                <p className="text-purple-200 text-sm">
                  Pastikan elemen penting gambar tidak terpotong di tengah-tengah grid. Posisikan objek utama di area
                  yang aman.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-3">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  <Download className="h-5 w-5" />
                </div>
                <span>Langkah 4: Download & Upload ke Instagram</span>
              </CardTitle>
              <CardDescription className="text-slate-300">
                Download hasil dan upload ke Instagram dengan urutan yang benar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-slate-300 space-y-3">
                <p>• Download file ZIP yang berisi semua potongan</p>
                <p>• Extract file ZIP di perangkat Anda</p>
                <p>• Upload ke Instagram sesuai urutan nama file</p>
                <p>• Mulai dari row-1_col-1, row-1_col-2, dst.</p>
                <p>• Gunakan aplikasi Instagram di HP untuk hasil terbaik</p>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <h4 className="text-red-300 font-semibold mb-2">⚠️ Penting - Urutan Upload:</h4>
                <div className="text-red-200 text-sm space-y-2">
                  <p>Upload harus sesuai urutan agar grid terlihat benar di feed Instagram:</p>
                  <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                    <div className="bg-slate-700 p-2 rounded text-center">1. row-1_col-1</div>
                    <div className="bg-slate-700 p-2 rounded text-center">2. row-1_col-2</div>
                    <div className="bg-slate-700 p-2 rounded text-center">3. row-1_col-3</div>
                    <div className="bg-slate-700 p-2 rounded text-center">4. row-2_col-1</div>
                    <div className="bg-slate-700 p-2 rounded text-center">5. row-2_col-2</div>
                    <div className="bg-slate-700 p-2 rounded text-center">6. row-2_col-3</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips Tambahan */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Tips & Trik untuk Hasil Terbaik</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-semibold mb-3">📸 Tips Fotografi</h3>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Gunakan gambar dengan resolusi tinggi</li>
                    <li>• Pastikan pencahayaan merata</li>
                    <li>• Hindari objek penting di tepi potongan</li>
                    <li>• Gunakan komposisi yang menarik</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-3">🎯 Tips Instagram</h3>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Upload saat jam prime time</li>
                    <li>• Gunakan hashtag yang relevan</li>
                    <li>• Buat caption yang engaging</li>
                    <li>• Konsisten dengan tema feed</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-3">⚡ Tips Teknis</h3>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Gunakan koneksi internet stabil</li>
                    <li>• Pastikan browser up-to-date</li>
                    <li>• Tutup tab lain saat processing</li>
                    <li>• Backup gambar asli</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-3">🎨 Tips Desain</h3>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Gunakan warna yang kontras</li>
                    <li>• Perhatikan flow visual</li>
                    <li>• Jangan terlalu banyak detail</li>
                    <li>• Test di berbagai device</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Link href="/">
              <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
                Mulai Buat Grid Instagram Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
