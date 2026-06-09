import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-[#1a1a2e] text-white py-4 px-6 flex items-center justify-between">
        <Image
          src="/images/logo-white.webp"
          alt="Finex Money"
          width={160}
          height={40}
          className="h-10 w-auto"
        />
        <a
          href="https://wa.me/27600198966"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
        >
          WhatsApp Us
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <Image
          src="/images/hero-banner.png"
          alt="Finex Money Hero Banner"
          width={3417}
          height={1500}
          className="w-full h-auto"
          priority
        />
        <div className="bg-[#1a1a2e] text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Money. Your Rules. Zero Delays.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Skip the queues and the paperwork. Open your bank account instantly
              with just your SA ID, foreign passport, or permit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/us/app/finex-money/id6456408372"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1a1a2e] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get it on App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.finexmoney.wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0066ff] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get it on Play Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Wallet Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Mobile Wallet That Is All Yours
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Say goodbye to the old way of banking. Open a mobile wallet today
              to take complete control of your money safely and securely.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#0066ff] text-xl mt-0.5">&#10003;</span>
                <span>Open instantly with just your ID, passport or permit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0066ff] text-xl mt-0.5">&#10003;</span>
                <span>Deposit funds to start transacting immediately</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0066ff] text-xl mt-0.5">&#10003;</span>
                <span>Send, receive and manage your money safely</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/wallet-features.png"
              alt="Finex Money mobile wallet"
              width={600}
              height={600}
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </section>

      {/* Claim Your Financial Power */}
      <section className="py-20 px-6 bg-[#f5f7fa]">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Claim Your Financial Power
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#0066ff] text-xl mt-0.5">&#10003;</span>
                <span>Receive your salary immediately</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0066ff] text-xl mt-0.5">&#10003;</span>
                <span>Shop online and make payments instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0066ff] text-xl mt-0.5">&#10003;</span>
                <span>Buy airtime, data and electricity anywhere</span>
              </li>
            </ul>
            <a
              href="https://linktr.ee/finex_money"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0066ff] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Sign Up
            </a>
          </div>
        </div>
      </section>

      {/* Three Easy Steps */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Three Easy Steps To Make It Yours
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f5f7fa] rounded-2xl p-8">
              <div className="w-14 h-14 bg-[#0066ff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Level 1</h3>
              <p className="text-gray-600">
                Provide SA ID, passport or permit to transact instantly
              </p>
            </div>
            <div className="bg-[#f5f7fa] rounded-2xl p-8">
              <div className="w-14 h-14 bg-[#0066ff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Level 2</h3>
              <p className="text-gray-600">
                Add a permit to unlock higher balance limits
              </p>
            </div>
            <div className="bg-[#f5f7fa] rounded-2xl p-8">
              <div className="w-14 h-14 bg-[#0066ff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Level 3</h3>
              <p className="text-gray-600">
                Add proof of address for max limits and physical card
              </p>
            </div>
          </div>
          <a
            href="https://linktr.ee/finex_money"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-[#0066ff] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get Your Card
          </a>
        </div>
      </section>

      {/* Dual Phones Image */}
      <section className="py-16 px-6 bg-[#1a1a2e]">
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

      {/* Support Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Support For Your Own Account
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <a
              href="tel:+27600198966"
              className="flex items-center gap-3 text-lg hover:text-[#0066ff] transition-colors justify-center"
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
              className="flex items-center gap-3 text-lg hover:text-[#0066ff] transition-colors justify-center"
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

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/images/logo-white.webp"
            alt="Finex Money"
            width={140}
            height={35}
            className="h-8 w-auto mx-auto mb-4"
          />
          <p className="text-gray-400 text-sm">
            Finex Money (PTY) LTD is a registered credit provider NCRCP27865
          </p>
        </div>
      </footer>
    </main>
  );
}
