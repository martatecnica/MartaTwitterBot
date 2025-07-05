// Twitter Bot que publica automáticamente frases con un enlace de afiliado
// Requiere: GitHub Actions + Twitter API v2 + entorno Node.js + dotenv

import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv';
dotenv.config();

const frases = [
  `🔐 Protege tu privacidad antes de que sea tarde 👉 https://bit.ly/protegetumovil #Privacidad #VPN #Ciberseguridad`,
  `📱 LaLiga te escuchaba. ¿Quién más lo hace? 👉 https://bit.ly/protegetumovil #Espionaje #ProtegeTuMóvil`,
  `🛡️ Este clic protege más que cualquier antivirus 👉 https://bit.ly/protegetumovil #PrivacidadDigital #Antiespía`,
  `🤫 No todos los espías llevan gabardina. Algunos van en tu bolsillo 👉 https://bit.ly/protegetumovil #Micrófono #PrivacidadMovil`,
  `💬 Lo instalé por curiosidad. Me quedé por seguridad 👉 https://bit.ly/protegetumovil #VPNGratis #ProtecciónDigital`,
  `🎙️ ¿Sabías que te pueden escuchar aunque el móvil esté bloqueado? 👉 https://bit.ly/protegetumovil #Hackers #EspionajeMovil`,
  `👀 Me enteré de lo de LaLiga y cambié todo 👉 https://bit.ly/protegetumovil #AppsEspías #Ciberdefensa`,
  `⚠️ Pensé que era paranoia hasta que vi las pruebas 👉 https://bit.ly/protegetumovil #LaLiga #PrivacidadEspaña`,
  `🔒 ¿Micrófono, GPS, WiFi? Todo se rastrea. Bloquéalo 👉 https://bit.ly/protegetumovil #Ciberespionaje #SeguridadMovil`,
  `🧠 Nadie tiene por qué saber dónde estoy. Ni tú 👉 https://bit.ly/protegetumovil #Anonimato #SeguridadDigital`,
  `💀 Puedes seguir confiando en tu operador... o protegerte 👉 https://bit.ly/protegetumovil #ProtegeTuInfo #StopEspias`,
  `📲 El botón más importante de tu móvil es este enlace 👉 https://bit.ly/protegetumovil #VPNMovil #AntiTracking`,
  `🙈 Esto es para los que ya no confían en “ajustes de privacidad” 👉 https://bit.ly/protegetumovil #PrivacidadReal #ControlTotal`,
  `🕵️‍♂️ Lo que estás ignorando, otros lo están escuchando 👉 https://bit.ly/protegetumovil #Espionaje #Ciberinteligencia`,
  `💸 Es más barato que ser hackeado. Y gratis 👉 https://bit.ly/protegetumovil #CiberseguridadGratis #StopTracking`,
  `🤖 Alexa, Siri y Google ya saben lo que hiciste anoche 👉 https://bit.ly/protegetumovil #IA #EspionajeDoméstico`,
  `📵 Si no usas esto, mejor apaga el móvil y llévate un walkie 👉 https://bit.ly/protegetumovil #Antiespionaje #SeguridadDigital`,
  `🧱 Lo llaman VPN. Yo lo llamo chaleco antibalas digital 👉 https://bit.ly/protegetumovil #BlindajeDigital #ProtecciónTotal`,
  `📶 Si usas tu móvil, usa esto. Punto 👉 https://bit.ly/protegetumovil #VPNMovil #Ciberautodefensa`,
  `🫣 ¿Crees que no te espían? Así pensaba yo 👉 https://bit.ly/protegetumovil #IgnoranciaDigital #EspionajeInvisible`
];

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET
});

async function postTweet() {
  const tweet = frases[Math.floor(Math.random() * frases.length)];
  try {
    await client.v2.tweet(tweet);
    console.log('Tweet enviado:', tweet);
  } catch (err) {
    console.error('Error al enviar tweet:', err);
  }
}

postTweet();
