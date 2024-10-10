import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { Metadata } from "next";

import { title } from "@/components/primitives";
import Button from "@/components/button";

export function metadata(): Metadata {
  return {
    title: "Home",
  };
}

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Bug in Next.JS&nbsp;</span>
        <span className={title({ color: "violet" })}>
          intercepting routes metadata&nbsp;
        </span>
        <br />
        <span className={title()}>
          were the title of the document won&apos;t be set.
        </span>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Visit <Code color="primary">/login</Code> directly and check the
            document title.
          </span>
        </Snippet>
        <br />
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Now visit <Code color="primary">/</Code> and navigate to{" "}
            <Code color="primary">/login</Code> with the provided like and check
            the document title.
          </span>
        </Snippet>
      </div>

      <div className="mt-8">
        <Button as={Link} href={"/login"}>
          Login
        </Button>
      </div>
    </section>
  );
}
