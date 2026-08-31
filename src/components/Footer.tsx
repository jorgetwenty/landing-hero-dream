import { useState } from "react";
import { Instagram, MessageCircle, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import logo from "@/assets/biomundo-logo.png.asset.json";

const privacyText = `A sua privacidade é importante para nós. É política da Biomundo respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site, e outros sites que possuímos e operamos.

Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.

Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.

Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.

O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.

Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.

O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.

Esta política é efetiva a partir de 1 April 2025.`;

const termsText = `1. Termos
Ao acessar o site da Biomundo, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.

2. Uso de Licença
É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da Biomundo, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: modificar ou copiar os materiais; usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); tentar descompilar ou fazer engenharia reversa de qualquer software contido no site; remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.

3. Isenção de responsabilidade
Os materiais no site da Biomundo são fornecidos 'como estão'. A Biomundo não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.

4. Limitações
Em nenhum caso a Biomundo ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais no site.

5. Precisão dos materiais
Os materiais exibidos no site da Biomundo podem incluir erros técnicos, tipográficos ou fotográficos. A Biomundo não garante que qualquer material em seu site seja preciso, completo ou atual. A Biomundo pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio.

6. Links
A Biomundo não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por parte da Biomundo do site. O uso de qualquer site vinculado é por conta e risco do usuário.

Modificações
A Biomundo pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.`;

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-[#F1E8D6] border-t-2 border-[#1c1917]/10 py-14 md:py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8 md:gap-10">

          {/* Logo */}
          <img
            src={logo}
            alt="Biomundo ParkShopping"
            className="w-36 md:w-48 h-auto"
            loading="lazy"
          />

          {/* Localização */}
          <div className="flex items-center gap-2 text-[#1c1917]">
            <MapPin className="w-4 h-4 text-[#16A34A]" strokeWidth={2.2} />
            <span
              className="text-xs md:text-sm font-medium tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              ParkShopping · Brasília
            </span>
          </div>

          {/* Botões sociais neobrutalist pill */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <a
              href="https://instagram.com/biomundoparkshopping"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Biomundo ParkShopping"
              className="nb-btn !gap-2"
            >
              <Instagram className="w-4 h-4" strokeWidth={2.2} />
              Instagram
            </a>
            <a
              href="https://wa.me/5561999999999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Biomundo ParkShopping"
              className="nb-btn !gap-2"
              style={{ backgroundColor: "#F5F1E9" }}
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2.2} />
              WhatsApp
            </a>
          </div>

          {/* Divisor */}
          <div className="w-full max-w-xs h-px bg-[#1c1917]/15" />

          {/* Disclaimer + copyright */}
          <div className="space-y-2">
            <p className="text-[#1c1917]/50 text-[11px] md:text-xs leading-relaxed max-w-md mx-auto">
              Este site não é afiliado ao Facebook ou qualquer entidade do Facebook. Ao sair do Facebook ou Instagram, a responsabilidade não é deles e sim do nosso site.
            </p>
            <p className="text-[#1c1917]/70 text-[11px] md:text-xs font-medium">
              Copyright © 2026 · Biomundo ParkShopping · Todos os direitos reservados.
            </p>
          </div>

          {/* Links legais */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="text-[#1c1917]/50 text-[11px] md:text-xs underline underline-offset-4 hover:text-[#1c1917] transition-colors"
            >
              Política de privacidade
            </button>
            <span className="text-[#1c1917]/30 text-xs">·</span>
            <button
              onClick={() => setTermsOpen(true)}
              className="text-[#1c1917]/50 text-[11px] md:text-xs underline underline-offset-4 hover:text-[#1c1917] transition-colors"
            >
              Termos de uso
            </button>
          </div>
        </div>
      </footer>

      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-background">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Política de Privacidade</DialogTitle>
            <DialogDescription className="sr-only">Política de privacidade do site Biomundo</DialogDescription>
          </DialogHeader>
          <div className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
            {privacyText}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-background">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Termos de Uso</DialogTitle>
            <DialogDescription className="sr-only">Termos de uso do site Biomundo</DialogDescription>
          </DialogHeader>
          <div className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
            {termsText}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
