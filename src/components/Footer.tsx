import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const privacyText = `A sua privacidade é importante para nós. É política do Sabedoria oculta respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Sabedoria oculta, e outros sites que possuímos e operamos.

Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.

Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.

Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.

O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.

Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.

O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.

O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você. Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.

Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.

Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.

Compromisso do Usuário:
O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Sabedoria oculta oferece no site e com caráter enunciativo, mas não limitativo:
A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;
B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, de apologia ao terrorismo ou contra os direitos humanos;
C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Sabedoria oculta, de seus fornecedores ou terceiros.

Esta política é efetiva a partir de 1 April 2025.`;

const termsText = `1. Termos
Ao acessar ao site Sabedoria oculta, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.

2. Uso de Licença
É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Sabedoria oculta, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: modificar ou copiar os materiais; usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Sabedoria oculta; remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.

3. Isenção de responsabilidade
Os materiais no site da Sabedoria oculta são fornecidos 'como estão'. Sabedoria oculta não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.

4. Limitações
Em nenhum caso o Sabedoria oculta ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Sabedoria oculta.

5. Precisão dos materiais
Os materiais exibidos no site da Sabedoria oculta podem incluir erros técnicos, tipográficos ou fotográficos. Sabedoria oculta não garante que qualquer material em seu site seja preciso, completo ou atual. Sabedoria oculta pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio.

6. Links
O Sabedoria oculta não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Sabedoria oculta do site. O uso de qualquer site vinculado é por conta e risco do usuário.

Modificações
O Sabedoria oculta pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.

Lei aplicável
Estes termos e condições são regidos e interpretados de acordo com as leis do Sabedoria oculta e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.`;

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-black border-t border-white/10 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-foreground text-xs md:text-sm leading-relaxed">
            Este site não é afiliado ao Facebook ou qualquer entidade do Facebook. Ao sair do Facebook ou Instagram, a responsabilidade não é deles e sim do nosso site.
          </p>
          <p className="text-muted-foreground text-xs md:text-sm">
            Copyright © 2026 - Sabedorias Ocultas
          </p>
          <p className="text-muted-foreground text-xs md:text-sm">
            Todos os direitos reservados.
          </p>
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="text-muted-foreground text-xs md:text-sm underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Política de privacidade
            </button>
            <span className="text-muted-foreground text-xs md:text-sm">|</span>
            <button
              onClick={() => setTermsOpen(true)}
              className="text-muted-foreground text-xs md:text-sm underline underline-offset-4 hover:text-foreground transition-colors"
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
            <DialogDescription className="sr-only">Política de privacidade do site Sabedoria Oculta</DialogDescription>
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
            <DialogDescription className="sr-only">Termos de uso do site Sabedoria Oculta</DialogDescription>
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
