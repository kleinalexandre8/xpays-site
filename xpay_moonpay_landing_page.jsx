export default function XpayLandingPage() {
  const sectionTitle = "text-2xl md:text-3xl font-semibold tracking-tight";
  const card = "rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 shadow-2xl";

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.16),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10">
        <header className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
          <div>
            <div className="text-xl font-bold tracking-tight">Xpay</div>
            <div className="text-xs text-neutral-400">Crypto payment infrastructure for merchants</div>
          </div>
          <nav className="hidden gap-6 text-sm text-neutral-300 md:flex">
            <a href="#product" className="hover:text-white">Product</a>
            <a href="#compliance" className="hover:text-white">Compliance</a>
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </header>

        <main className="pt-10 md:pt-16">
          <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-200">
                Software provider • Non-custodial orchestration layer
              </div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Accept crypto payments through a unified merchant checkout.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg">
                Xpay is a payment orchestration platform for online merchants and marketplaces. We provide the API,
                checkout interface, transaction tracking, and webhook infrastructure that connects merchants to licensed
                payment and crypto on-ramp providers.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-2xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:bg-violet-400">
                  Request access
                </a>
                <a href="#product" className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-neutral-100 hover:bg-white/5">
                  View product overview
                </a>
              </div>
            </div>

            <div className={card}>
              <div className="text-sm font-semibold text-violet-200">How it works</div>
              <div className="mt-5 space-y-4 text-sm text-neutral-300">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="font-medium text-white">1. Merchant integrates Xpay</div>
                  <p className="mt-1">Merchants use the Xpay API and hosted checkout to offer crypto payments.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="font-medium text-white">2. User selects “Pay with crypto”</div>
                  <p className="mt-1">The user is redirected to an embedded or hosted partner flow for authorization and purchase.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="font-medium text-white">3. Licensed partners process the transaction</div>
                  <p className="mt-1">KYC/AML, fiat-to-crypto conversion, and settlement are handled by regulated providers.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="font-medium text-white">4. Xpay notifies the merchant</div>
                  <p className="mt-1">Xpay tracks payment state and sends signed webhooks back to the merchant.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="product" className="mt-20 grid gap-6 md:grid-cols-3">
            <div className={card}>
              <h2 className="text-lg font-semibold">Hosted checkout</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                A merchant-facing crypto checkout that simplifies payment collection, status tracking, and conversion flows.
              </p>
            </div>
            <div className={card}>
              <h2 className="text-lg font-semibold">Merchant API</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                Create payments, retrieve statuses, receive signed webhooks, and manage transaction reconciliation.
              </p>
            </div>
            <div className={card}>
              <h2 className="text-lg font-semibold">Partner integrations</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                Xpay connects merchants with licensed payment and on-ramp providers for compliant transaction handling.
              </p>
            </div>
          </section>

          <section id="compliance" className="mt-20 grid gap-8 md:grid-cols-2">
            <div className={card}>
              <h2 className={sectionTitle}>Compliance statement</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-neutral-300">
                <p>
                  Xpay operates as a software and payment orchestration provider. Xpay does not custody customer funds,
                  does not hold client crypto-assets, and does not provide regulated financial services directly.
                </p>
                <p>
                  Payment processing, user verification, KYC/AML checks, fiat-to-crypto conversion, and settlement are
                  performed by licensed third-party providers integrated into the Xpay platform.
                </p>
                <p>
                  Merchants remain responsible for complying with applicable laws, regulations, and their contractual
                  obligations with payment and on-ramp partners.
                </p>
              </div>
            </div>
            <div className={card}>
              <h2 className={sectionTitle}>Website information for reviewers</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-neutral-300 list-disc pl-5">
                <li>Xpay is a B2B product for merchants and marketplaces.</li>
                <li>Xpay provides software infrastructure, API connectivity, checkout UX, and transaction monitoring.</li>
                <li>Xpay does not operate an exchange, wallet custody service, or consumer brokerage product.</li>
                <li>Xpay relies on licensed partners for regulated activities and settlement flows.</li>
              </ul>
            </div>
          </section>

          <section id="privacy" className="mt-20">
            <div className={card}>
              <h2 className={sectionTitle}>Privacy Policy</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-neutral-300">
                <p>
                  Xpay may collect business contact information, merchant account details, transaction metadata, and
                  technical logs necessary to operate the platform, protect against abuse, and provide support.
                </p>
                <p>
                  Xpay does not intentionally collect more personal data than necessary for its software services.
                  Identity verification and compliance checks are performed by licensed third-party payment and on-ramp providers.
                </p>
                <p>
                  We may share relevant transaction and integration data with our service providers and infrastructure
                  partners where necessary to deliver the service, comply with legal obligations, prevent fraud, and maintain security.
                </p>
                <p>
                  Merchants may contact us to request information regarding data handling, retention, and deletion,
                  subject to legal, security, and contractual requirements.
                </p>
              </div>
            </div>
          </section>

          <section id="terms" className="mt-20">
            <div className={card}>
              <h2 className={sectionTitle}>Terms of Service</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-neutral-300">
                <p>
                  Xpay provides software infrastructure to businesses for payment orchestration and merchant transaction workflows.
                  Access to the platform is subject to approval, technical compatibility, and compliance review.
                </p>
                <p>
                  Merchants are responsible for the legality of their business model, the accuracy of submitted information,
                  and compliance with all applicable laws, including consumer protection, tax, sanctions, and financial regulations.
                </p>
                <p>
                  Xpay may suspend or terminate access where required for legal, security, fraud-prevention, operational,
                  or partner-compliance reasons.
                </p>
                <p>
                  Regulated financial services are not provided directly by Xpay. Where payment, verification, conversion,
                  or settlement services are needed, they are delivered by licensed third-party providers under their own terms.
                </p>
              </div>
            </div>
          </section>

          <section id="contact" className="mt-20 mb-12 grid gap-6 md:grid-cols-[1fr_0.9fr]">
            <div className={card}>
              <h2 className={sectionTitle}>Contact</h2>
              <div className="mt-5 space-y-3 text-sm leading-7 text-neutral-300">
                <p><span className="font-medium text-white">Business name:</span> Xpay</p>
                <p><span className="font-medium text-white">Email:</span> contact@xpay.app</p>
                <p><span className="font-medium text-white">Compliance:</span> legal@xpay.app</p>
                <p><span className="font-medium text-white">Support:</span> support@xpay.app</p>
                <p><span className="font-medium text-white">Use case:</span> Crypto payment infrastructure for merchants and marketplaces.</p>
              </div>
            </div>
            <div className={card}>
              <h2 className="text-lg font-semibold">Reviewer summary</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-300">
                This website is intended to clearly describe Xpay’s role as a software-only provider. The platform does not
                hold customer funds or perform regulated services directly. Licensed partners handle identity verification,
                payment processing, and crypto conversion.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
