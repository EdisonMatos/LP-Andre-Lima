import bgImg from "../assets/imgs/hero/bgHeroInfluencer.webp";
import logo from "../assets/imgs/logo/logo.webp";
import imagemAbout from "../assets/imgs/about/aboutImg.webp";
import { infos } from "./content";
import { Shield } from "lucide-react";
import { File } from "lucide-react";
import { Banknote } from "lucide-react";
import { FileKey2 } from "lucide-react";
import { Scale } from "lucide-react";
import { Handshake } from "lucide-react";
import { BadgeDollarSign } from "lucide-react";
import { Accessibility } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { Ban } from "lucide-react";
import { IdCard } from "lucide-react";
import { Gavel } from "lucide-react";

import img1 from "../assets/imgs/about/image1.webp";
import img2 from "../assets/imgs/about/image2.webp";
import img3 from "../assets/imgs/about/image3.webp";

const currentYear = new Date().getFullYear();

const contentLp01 = {
  infos: {
    title:
      "Jonas Araújo Advocacia | Especialista em Direito de Trânsito em São Paulo - SP",
    description:
      "Defenda seus direitos no trânsito com a Jonas Araújo Advocacia, referência em São Paulo. Atendimento ágil, especializado e estratégias jurídicas para proteger sua CNH e recorrer de infrações.",

    keywords:
      "Jonas Araujo Advocacia, Direito de Trânsito São Paulo, Advogado de Trânsito SP, Defesa CNH Suspensa, Recurso de Multa SP, Suspensão de CNH, Cassação de CNH, Especialista em Trânsito, Infração de Trânsito SP, Advogado para Multas, Defesa Administrativa Trânsito, Recurso Detran SP, Advogado Detran São Paulo, Multa Indevida SP, Direito Administrativo Trânsito, Defesa Jurídica no Trânsito, Assessoria Trânsito SP, Consultoria Jurídica Trânsito, Advogado Trânsito São Paulo, Recorrer Multa Trânsito SP.",
  },
  hero: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "logomarca",
    },
    textArea: {
      title: (
        <h1>
          No trânsito, a multa vem rápido.{" "}
          <span className="text-primary">Seus direitos,</span> nem sempre.
        </h1>
      ),
      subtitle:
        "Entenda como agir diante de infrações, suspensões, acidentes ou processos de trânsito. ",
      buttonLabel: "Quero proteger meus direitos",
      obsHero: {
        icon: (
          // Ícone mantido
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-map-pin-check"
          >
            <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" />
            <circle cx="12" cy="10" r="3" />
            <path d="m16 18 2 2 4-4" />
          </svg>
        ),
        text: "A_Definir",
      },
      ctaButtonAriaLabel: "A_Definir",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "SE SENTIU LESADO NO TRÂNSITO?",
      title: "Descubra quando você pode recorrer e garantir seus direitos.",
    },
    cards: {
      card1: {
        icon: <Ban width={32} height={32} />,
        title: "Multas e Infrações Indevidas",
        description:
          "Contestações de multas aplicadas sem justificativa ou erro.",
        modal1: {
          title: <p>A_Definir</p>,
          subtitle: <p>A_Definir</p>,
        },
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-id-card-lanyard-icon lucide-id-card-lanyard"
          >
            <path d="M13.5 8h-3" />
            <path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" />
            <path d="M16.899 22A5 5 0 0 0 7.1 22" />
            <path d="m9 2 3 6" />
            <circle cx="12" cy="15" r="3" />
          </svg>
        ),
        title: "Suspensão e Cassação da CNH",
        description:
          "Defesa em processos que resultam na perda da carteira de habilitação.",
        modal2: {
          title: <p>A_Definir</p>,
          subtitle: <p>A_Definir</p>,
        },
      },
      card3: {
        icon: <IdCard width={32} height={32} />,
        title: "Acidentes e Indenizações",
        description:
          "Garantia dos direitos em casos de acidentes e compensações.",
        modal3: {
          title: <p>A_Definir</p>,
          subtitle: <p>A_Definir</p>,
        },
      },
      card4: {
        icon: <Gavel width={32} height={32} />,
        title: "Recursos Administrativos e Judiciais",
        description:
          "Apoio em recursos e ações para reversão de decisões injustas.",
        modal4: {
          title: <p>A_Definir</p>,
          subtitle: <p>A_Definir</p>,
        },
      },
    },
  },
  about: {
    bgImg: bgImg,
    imagesGaleria: {
      imagem1: img1,
      imagem2: img2,
      imagem3: img3,
    },
    imgAbout: {
      img: imagemAbout,
    },
    logo: {
      logoImg: logo,
      alt: "logomarca",
    },
    sectionHeader: {
      miniTag: "EXCELÊNCIA EM DEFESA ADMINISTRATIVA DE TRÂNSITO",
      title: "Comprometidos com a proteção dos seus direitos no trânsito.",
    },
    paragraph: (
      <p>
        Nossa equipe é especializada na defesa jurídica em casos de infrações,
        multas, suspensão e cassação de CNH, e demais demandas do Direito de
        Trânsito. Atuamos com foco nas necessidades específicas de cada cliente,
        oferecendo atendimento personalizado e estratégico.
        <br />
        <br />
        Unimos técnica, inovação e experiência para garantir resultados
        concretos e justos. Desde o início, somos reconhecidos pela atuação
        firme, próxima e eficiente, sempre em defesa dos seus direitos.
        <br />
        <br />
        Se você procura um escritório que realmente entende seu caso e luta por
        ele, está no lugar certo.
      </p>
    ),
    buttonLabel: "Fale agora com um advogado",
    ctaButtonAriaLabel: "Botão de Contato",
  },
  steps: {
    miniTag: "A_Definir",
    title: "A_Definir",
    subtitle: "A_Definir",
    alt: "A_Definir",
    cards: {
      card1: {
        stepNumber: 1,
        cardTitle: "A_Definir",
        cardDescription: "A_Definir",
      },
      card2: {
        stepNumber: 2,
        cardTitle: "A_Definir",
        cardDescription: "A_Definir",
      },
      card3: {
        stepNumber: 3,
        cardTitle: "A_Definir",
        cardDescription: "A_Definir",
      },
      buttonLabel: "A_Definir",
      ariaLabel: "A_Definir",
    },
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A ESCOLHA CERTA",
      title:
        "Por que somos a melhor opção para defender seus direitos no trânsito",
    },
    cards: {
      card1: {
        icon: <Gavel width={32} height={32} />,
        title: "Especialistas em Direito de Trânsito",
        description:
          "Conhecemos as normas e particularidades do Código de Trânsito Brasileiro e suas implicações práticas.",
      },
      card2: {
        icon: <ChartNoAxesCombined width={32} height={32} />,
        title: "Experiência Comprovada e Atualizada",
        description:
          "Anos de atuação em defesa administrativa e judicial, com participação em congressos e eventos para estratégias eficazes.",
      },
      card3: {
        icon: <Handshake width={32} height={32} />,
        title: "Atuação Próxima dos Órgãos e Tribunais",
        description:
          "Acompanhamos julgamentos e atualizações nas instâncias administrativas e judiciais, garantindo defesas alinhadas às últimas decisões.",
      },
      card4: {
        icon: <BadgeDollarSign width={32} height={32} />,
        title: "Estratégias Personalizadas para Seu Caso",
        description:
          "Desenvolvemos técnicas exclusivas para reversão de multas, suspensão de CNH e outros recursos, com histórico de resultados positivos.",
      },
    },
  },
  video: {
    sectionHeader: {
      miniTag: "A_Definir",
      title: "A_Definir",
      subtitle: "A_Definir",
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "NÃO PERCA TEMPO",
      title: "Seus direitos no trânsito ao seu alcance!",
      subtitle: (
        <p className="opacity-80">
          Na Jonas Araújo Advocacia, estamos prontos para ajudar você a resolver
          qualquer questão jurídica relacionada ao trânsito. Conte com uma
          equipe especializada para proteger sua CNH, recorrer de multas e
          garantir seus direitos com segurança e agilidade.
        </p>
      ),
    },
    buttonLabel: "Vamos resolver seu problema",
    ctaButtonAriaLabel: "Botão de Contato",
  },
  contact: {
    card1: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      title: "Instagram",
      description: `@${infos.instagramProfile}`,
    },
    card2: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Email",
      description: `${infos.email}@${infos.domain}`,
    },
    card3: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
      title: "Whatsapp",
      description: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
    },
    card4: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-phone-icon lucide-phone"
        >
          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
        </svg>
      ),
      title: "Fixo",
      description: `(${infos.phoneSecundario.ddd}) ${infos.phoneSecundario.firstPart}-${infos.phoneSecundario.secondPart}`,
    },
  },
  footer: {
    copyrightLine: `© ${currentYear} ${infos.name}. Todos os direitos reservados.`,
    disclaimer: `Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. ${infos.name} oferece serviços jurídicos privativos de advogado, de acordo com a legislação vigente e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.`,
  },
  links: {
    instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
    ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
  },
};

export default contentLp01;
