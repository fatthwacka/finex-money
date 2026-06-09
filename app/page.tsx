import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner - full bleed, no header */}
      <section className="relative">
        <Image
          src="/images/hero-banner.png"
          alt="Finex Money - This One's Mine"
          width={3417}
          height={1500}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* App Store Buttons - solid red */}
      <section className="bg-[#e22525] py-6 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://apps.apple.com/us/app/finex-money/id6456408372"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors text-center"
          >
            Get it on App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.finexmoney.wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors text-center"
          >
            Get it on Play Store
          </a>
        </div>
      </section>

      {/* Heading + Description - red */}
      <section className="bg-[#e22525] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Money. Your Rules. Zero Delays.
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto">
            Skip the queues and the paperwork. Open your bank account{" "}
            <strong className="text-white">instantly</strong> with just your SA
            ID, foreign passport, or permit. Make your first deposit and unlock
            your mobile wallet today.
          </p>
        </div>
      </section>

      {/* A Mobile Wallet That Is All Yours - red to dark orange gradient */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#e22525] to-[#c44a2a] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              A Mobile Wallet
              <br />
              That Is All Yours
            </h2>
          </div>
          <div>
            <p className="text-lg text-white/90">
              Say goodbye to the old way of banking. Open a mobile wallet today
              to take complete control of your money <strong>safely</strong> and{" "}
              <strong>securely</strong>.
            </p>
          </div>
        </div>

        {/* Three feature cards - soft tinted backgrounds */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white/15 backdrop-blur rounded-2xl p-8 text-center">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>
            </div>
            <p className="text-white">
              Open <strong>instantly</strong> with just your ID, passport or
              permit
            </p>
          </div>
          <div className="bg-white/15 backdrop-blur rounded-2xl p-8 text-center">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-white">
              Deposit funds to start transacting{" "}
              <strong>immediately</strong>
            </p>
          </div>
          <div className="bg-white/15 backdrop-blur rounded-2xl p-8 text-center">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
            </div>
            <p className="text-white">
              Send, receive and manage your money <strong>safely</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Claim Your Financial Power - dark block with red accents */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <Image
              src="/images/claim-power.webp"
              alt="Claim your financial power"
              width={600}
              height={600}
              className="w-full max-w-md h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Claim Your Financial Power
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#e22525] text-xl mt-0.5">&#10003;</span>
                <span className="text-white">Receive your salary immediately</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#e22525] text-xl mt-0.5">&#10003;</span>
                <span className="text-white">Shop online and make payments instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#e22525] text-xl mt-0.5">&#10003;</span>
                <span className="text-white">Buy airtime, data and electricity anywhere</span>
              </li>
            </ul>
            <a
              href="https://linktr.ee/finex_money"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#e22525] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Sign Up
            </a>
          </div>
        </div>
      </section>

      {/* Three Easy Steps - red to deep red gradient */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#e22525] to-[#8b1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            Three Easy Steps To Make It Yours
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#c44a2a]/60 backdrop-blur rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-white text-[#e22525] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Level 1</h3>
              <p className="text-white/80">
                Provide SA ID, passport or permit to transact instantly
              </p>
            </div>
            <div className="bg-[#c44a2a]/60 backdrop-blur rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-white text-[#e22525] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Level 2</h3>
              <p className="text-white/80">
                Add a permit to unlock higher balance limits
              </p>
            </div>
            <div className="bg-[#c44a2a]/60 backdrop-blur rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-white text-[#e22525] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Level 3</h3>
              <p className="text-white/80">
                Add proof of address for max limits and physical card
              </p>
            </div>
          </div>
          <a
            href="https://linktr.ee/finex_money"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-white text-[#e22525] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Your Card
          </a>
        </div>
      </section>

      {/* Dual Phones Image - deep red */}
      <section className="py-16 px-6 bg-[#8b1a1a]">
        <div className="max-w-3xl mx-auto flex justify-center">
          <Image
            src="/images/dual-phones.png"
            alt="Finex Money app on phones"
            width={800}
            height={500}
            className="w-full max-w-2xl h-auto"
          />
        </div>
      </section>

      {/* Support Section - deep red to red gradient */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#8b1a1a] to-[#e22525]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Support For Your Own Account
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+27600198966"
              className="flex items-center gap-3 text-lg bg-white/15 backdrop-blur rounded-full px-6 py-3 text-white hover:bg-white/25 transition-colors justify-center"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +27 60 019 8966
            </a>
            <a
              href="mailto:support@finexmoney.com"
              className="flex items-center gap-3 text-lg bg-white/15 backdrop-blur rounded-full px-6 py-3 text-white hover:bg-white/25 transition-colors justify-center"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              support@finexmoney.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer - solid red */}
      <footer className="bg-[#e22525] text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/images/logo-white.webp"
            alt="Finex Money"
            width={140}
            height={35}
            className="h-8 w-auto mx-auto mb-4"
          />
          <p className="text-white/60 text-sm">
            Finex Money (PTY) LTD is a registered credit provider NCRCP27865
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/27600198966"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25d366] hover:bg-[#20bd5a] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
