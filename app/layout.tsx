import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lutfi Hilman Prasetya — Full-stack Software Developer',
  description:
    'Personal portfolio of Lutfi Hilman Prasetya, a full-stack software developer with 10+ years of experience building web and desktop applications.',
  themeColor: '#0a0b0c',
}

const themeScript = `(function(){
  var KEY="portfolio-theme";
  var root=document.documentElement;
  function sys(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}
  function apply(t){root.setAttribute("data-theme",t);}
  var stored=null;
  try{stored=localStorage.getItem(KEY);}catch(e){}
  apply(stored==="light"||stored==="dark"?stored:sys());
  if(window.matchMedia){
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",function(e){
      var has=false;try{has=!!localStorage.getItem(KEY);}catch(err){}
      if(!has)apply(e.matches?"light":"dark");
    });
  }
  window.__toggleTheme=function(){
    var next=root.getAttribute("data-theme")==="light"?"dark":"light";
    root.classList.add("theme-anim");
    apply(next);
    try{localStorage.setItem(KEY,next);}catch(e){}
    window.setTimeout(function(){root.classList.remove("theme-anim");},320);
  };
})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        {/* runs before paint — prevents flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
