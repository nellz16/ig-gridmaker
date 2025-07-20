import type { Metadata } from "next"
import Link from "next/link"
import { Grid3X3, ArrowLeft, Star, Shield, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Tentang Auto Grid Slicer - Tool Instagram Grid Maker Gratis",
  description:
    "Pelajari lebih lanjut tentang Auto Grid Slicer, tool gratis terbaik untuk membuat grid Instagram yang menakjubkan. Fitur lengkap, mudah digunakan, dan 100% gratis.",
  keywords: ["tentang auto grid slicer", "instagram grid tool", "cara kerja grid slicer", "fitur grid maker"],
}

export default function TentangPage() {
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
            <div className="flex items-center justify-center space-x-3">
              <Grid3X3 className="h-10 w-10 text-purple-400" />
              <h1 className="text-4xl font-bold text-white">Tentang Auto Grid Slicer</h1>
            </div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tool Instagram Grid Maker terbaik yang membantu Anda membuat feed Instagram yang menakjubkan
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Apa itu Auto Grid Slicer */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Apa itu Auto Grid Slicer?</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
                <strong>Auto Grid Slicer</strong> adalah tool online gratis yang dirancang khusus untuk membantu content
                creator, bisnis, dan individu membuat grid Instagram yang menarik dan profesional.
              </p>
              <p>
                Dengan tool ini, Anda dapat dengan mudah memotong gambar panorama menjadi beberapa bagian yang sempurna
                untuk diupload ke Instagram, menciptakan efek visual yang menakjubkan di feed Anda.
              </p>
            </CardContent>
          </Card>

          {/* Fitur Unggulan */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Mengapa Memilih Auto Grid Slicer?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">100% Gratis</h3>
                    <p className="text-slate-300 text-sm">
                      Tidak ada biaya tersembunyi, tidak perlu berlangganan. Gunakan sepuasnya tanpa batasan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-green-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Privacy Terjamin</h3>
                    <p className="text-slate-300 text-sm">
                      Gambar Anda tidak disimpan di server. Semua proses dilakukan di browser Anda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Cepat & Mudah</h3>
                    <p className="text-slate-300 text-sm">
                      Interface yang intuitif, proses hanya dalam 4 langkah sederhana.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Tanpa Registrasi</h3>
                    <p className="text-slate-300 text-sm">
                      Langsung pakai tanpa perlu daftar akun atau memberikan data pribadi.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cara Kerja */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Bagaimana Cara Kerjanya?</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Tentukan Jumlah Baris</h3>
                    <p className="text-sm">
                      Pilih berapa baris yang Anda inginkan untuk grid Instagram (contoh: 4 untuk grid 4x3)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Upload Gambar Panorama</h3>
                    <p className="text-sm">
                      Upload gambar dengan ukuran yang sesuai (tool akan memberitahu ukuran yang diperlukan)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Preview & Proses</h3>
                    <p className="text-sm">Lihat preview hasil potongan, lalu klik proses untuk memotong gambar</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Download & Upload</h3>
                    <p className="text-sm">
                      Download file ZIP berisi semua potongan, lalu upload ke Instagram sesuai urutan
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Pertanyaan yang Sering Diajukan</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Apakah benar-benar gratis?</h3>
                <p className="text-sm">Ya, 100% gratis tanpa biaya tersembunyi atau batasan penggunaan.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Apakah gambar saya aman?</h3>
                <p className="text-sm">
                  Sangat aman. Semua proses dilakukan di browser Anda, gambar tidak pernah dikirim ke server kami.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Format gambar apa yang didukung?</h3>
                <p className="text-sm">Mendukung format JPG, PNG, dan WebP.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Berapa ukuran maksimal gambar?</h3>
                <p className="text-sm">
                  Tidak ada batasan ukuran, namun untuk performa terbaik disarankan maksimal 50MB.
                </p>
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
