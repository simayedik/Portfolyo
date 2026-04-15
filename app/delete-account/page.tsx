export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-8">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          MiVocabulario - Hesap ve Veri Silme
        </h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <p>
            MiVocabulario olarak gizliliğinize önem veriyoruz. Hesabınızı ve hesabınızla ilişkili tüm verileri silmek isterseniz aşağıdaki yöntemleri kullanabilirsiniz.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
            <p className="text-blue-900 font-medium mb-0">
              <strong>Önemli:</strong> Hesap silme işlemi kalıcıdır. Hesabınız silindiğinde tüm kelime listeleriniz, öğrenme geçmişiniz ve seri (streak) bilgileriniz geri döndürülemez şekilde sunucularımızdan temizlenir.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Hesabımı Nasıl Silerim?</h2>
            
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h3 className="font-bold mb-1">1. Uygulama İçinden (Hızlı)</h3>
                <p>
                  Uygulama içindeki <strong>Ayarlar</strong> sekmesine giderek <strong>&quot;Hesabı Sil&quot;</strong> butonuna dokunabilirsiniz. Verileriniz anında silinecektir.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h3 className="font-bold mb-1">2. E-posta Yoluyla</h3>
                <p>
                  Uygulamaya erişemiyorsanız, kayıtlı e-posta adresinizden{" "}
                  <a href="mailto:ediksimay@gmail.com" className="text-blue-600 hover:underline ml-1">
                    ediksimay@gmail.com
                  </a>{" "}
                  adresine &quot;Hesap Silme Talebi&quot; konulu bir mail atarak verilerinizin kaldırılmasını talep edebilirsiniz.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Hangi Veriler Silinir?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Firebase Authentication profil bilgileriniz (E-posta).</li>
              <li>Firestore üzerinde saklanan tüm kişisel kelimeleriniz ve çevirileriniz.</li>
              <li>Öğrenme istatistikleriniz ve streak verileriniz.</li>
            </ul>
          </section>
        </div>

        <footer className="mt-12 pt-6 border-t border-slate-100 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Simay Edik - MiVocabulario Destek
        </footer>
      </div>
    </div>
  );
}