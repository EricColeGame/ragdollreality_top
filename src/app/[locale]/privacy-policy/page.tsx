import { LegalPage } from "@/components/legal-page";
import { getMessages } from "next-intl/server";
import en from "@/locales/en.json";

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = (await getMessages({ locale })) as typeof en;
  const page = messages.legal.privacyPolicy;
  return (
    <LegalPage title={page.title}>
      {page.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </LegalPage>
  );
}
