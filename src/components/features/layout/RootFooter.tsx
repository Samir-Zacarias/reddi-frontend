import FooterLink from "./FooterLink";
import FooterTitle from "./FooterTitle";
import FacebookIcon from "../../icons/socials/FacebookIcon";
import InstagramIcon from "../../icons/socials/InstagramIcon";
import XIcon from "../../icons/socials/XIcon";

export default function RootFooter() {
  return (
    <footer className="bg-black p-8 text-footerColor">
      <div className="md:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <nav>
            <h1 className="text-primary mb-3">Reddi</h1>
            <p>Todo lo que necesites directo a tu villa o yate</p>
          </nav>
          <nav className="flex flex-col gap-1">
            <FooterTitle>Reddi</FooterTitle>
            <FooterLink href="/">Inicio</FooterLink>
            <FooterLink href="/categorias">Categorías</FooterLink>
            <FooterLink href="/como-funciona">Cómo funciona</FooterLink>
            <FooterLink href="/beneficios">Beneficios</FooterLink>
          </nav>
          <nav className="flex flex-col gap-1">
            <FooterTitle>Soporte</FooterTitle>
            <FooterLink href="/contacto">Contacto</FooterLink>
            <FooterLink href="/ayuda">Ayuda</FooterLink>
          </nav>
          <nav className="flex flex-col gap-1">
            <FooterTitle>Legal</FooterTitle>
            <FooterLink href="/terminos-y-condiciones">
              Términos y condiciones
            </FooterLink>
            <FooterLink href="/privacidad">Privacidad</FooterLink>
          </nav>
        </div>
        <div className="flex flex-col gap-4 mt-12 md:flex-row md:justify-between">
          <p>© 2024 Reddi. Todos los derechos reservados.</p>
          <nav className="flex flex-row gap-5">
            <a href="https://facebook.com" target="_blank">
              <FacebookIcon className="hover:text-primary" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <InstagramIcon className="hover:text-primary" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <XIcon className="hover:text-primary" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
