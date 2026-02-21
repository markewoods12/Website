import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer and disclosure for markewoods.com.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-16 border-b border-border pb-12">
        <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-4">
          Legal
        </span>
        <h1
          className="font-heading italic text-foreground"
          style={{ fontSize: "clamp(3rem, 8vw, 5rem)", lineHeight: "0.95" }}
        >
          Disclaimer
        </h1>
        <p className="font-mono text-[10px] tracking-wider uppercase text-muted mt-6">
          Last updated: February 2026
        </p>
      </div>

      <div className="space-y-10 text-base leading-relaxed text-muted">
        <section>
          <h2 className="font-heading text-xl italic text-foreground mb-4">Personal Views</h2>
          <p>
            The views, opinions, and content expressed on this website are entirely my own and do
            not represent the views, positions, or policies of Bullish Group, CoinDesk, or any of
            their affiliates, subsidiaries, directors, officers, employees, or agents. Nothing
            published here should be construed as an official statement or communication from any
            of those entities.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl italic text-foreground mb-4">Not Investment Advice</h2>
          <p>
            Nothing on this website constitutes investment advice, financial advice, trading advice,
            or any other form of advice. The content is provided for informational and educational
            purposes only. You should not construe any content on this site as investment advice or
            a recommendation to buy, sell, or hold any asset.
          </p>
          <p className="mt-4">
            Digital assets, including cryptocurrencies, are highly volatile and speculative. Past
            performance is not indicative of future results. You may lose some or all of any
            capital you invest. Always do your own research and consult with a qualified financial
            advisor before making any investment decisions.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl italic text-foreground mb-4">Personal Holdings Disclosure</h2>
          <p>
            I personally hold positions in various digital assets, including bitcoin (BTC) and
            ether (ETH). I may hold other digital assets from time to time. Where relevant, I will
            disclose specific holdings in the context of individual posts or discussions. My
            holdings may change at any time without notice.
          </p>
          <p className="mt-4">
            This disclosure is provided for transparency purposes and does not constitute a
            recommendation or endorsement of any particular asset.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl italic text-foreground mb-4">Accuracy and Completeness</h2>
          <p>
            I make reasonable efforts to ensure the accuracy of information published on this site,
            but I make no warranties or representations about the completeness, accuracy,
            timeliness, or reliability of any content. The digital assets and financial technology
            space evolves rapidly; information that was accurate when written may become outdated.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl italic text-foreground mb-4">Forward-Looking Statements</h2>
          <p>
            Certain statements on this site may constitute forward-looking statements. These
            statements involve known and unknown risks, uncertainties, and other factors that may
            cause actual outcomes to differ materially from those expressed or implied. I undertake
            no obligation to update forward-looking statements to reflect new information or
            subsequent events.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl italic text-foreground mb-4">Third-Party Links</h2>
          <p>
            This site may contain links to third-party websites. These links are provided for
            convenience only. I have no control over the content of linked sites and accept no
            responsibility for them or for any loss or damage that may arise from your use of them.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl italic text-foreground mb-4">Contact</h2>
          <p>
            If you have questions about this disclaimer, you can reach me at{" "}
            <a
              href="mailto:hello@markewoods.com"
              className="text-accent/80 hover:text-accent transition-colors"
            >
              hello@markewoods.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
