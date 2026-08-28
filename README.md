# Trevino Garage Door Repair — trevinogaragedoorrepairservice.site

Sitio estático en HTML + CSS puro (sin JavaScript, sin librerías, sin dependencias externas).

## Estructura

```
index.html                 ->  /                    home
BocaRaton/index.html       ->  /BocaRaton           oficina principal
Plantation/index.html      ->  /Plantation
NorthPalmBeach/index.html  ->  /NorthPalmBeach
DelrayBeach/index.html     ->  /DelrayBeach
CoralGables/index.html     ->  /CoralGables
css/styles.css             ->  estilos base (header, footer, botones, tarjetas)
css/location.css           ->  componentes de las páginas de ubicación
img/                       ->  fotos opcionales (ver img/LEEME.txt)
ref/                       ->  capturas de referencia (no subir al hosting)
robots.txt  ·  sitemap.xml
```

Cada carpeta con `index.html` genera la URL limpia (`/NorthPalmBeach`).
Subí todo a la raíz del hosting (podés omitir `ref/`).

## Las 5 páginas de ubicación

Las cinco son **idénticas en estructura**; solo cambian ciudad, dirección, ZIP,
mapa, texto local y reseñas. Secciones, en orden:

1. Header sticky — logo, nav, botón *Free Quote* + *Call Now*
2. Hero — breadcrumb `Locations / Ciudad`, badge `FL · ZIP`, H1 con ciudad + ZIP,
   párrafo, botones *Call* y *Get Directions*, y 4 tarjetas de garantía
3. Mapa de la dirección + tarjeta **Location Details** (dirección, teléfono,
   email, horarios) con botón *Open in Google Maps*
4. **Why {ciudad} chooses Trevino** — foto + 5 puntos con check
5. **Fair, transparent pricing in {ciudad}** — 4 puntos + foto
6. **Our Services** — 6 tarjetas (repair, installation, emergency, maintenance,
   opener, springs)
7. Nota de conocimiento local (texto propio de cada ciudad)
8. **What {ciudad} customers are saying** — 3 reseñas
9. **Other nearby locations** — tarjetas a las otras 4 oficinas (interlinking)
10. Banda CTA *Ready to fix that door?*
11. Footer de 4 columnas + barra de llamada fija en móvil

Cada página lleva su propio JSON-LD `LocalBusiness` con su dirección.

## Datos del negocio (para editar)

| Dato | Valor actual |
|---|---|
| Marca | Trevino Garage Door Repair |
| Dominio | trevinogaragedoorrepairservice.site |
| Teléfono | +1 (561) 484-2170 — *inventado, cambiar* |
| Email | service@trevinogaragedoorrepairservice.site |
| Oficina principal | 8230 210th St S, Unit 1804, Boca West, FL 33433 |
| Horario | Lun–Sáb 7:00 AM – 9:00 PM · Dom y feriados: emergencias 24/7 |

### Cambiar el teléfono

Aparece en 3 formatos. Buscar y reemplazar en los 6 archivos `.html`:

1. `+15614842170` → en los `href="tel:..."`
2. `(561) 484-2170` → texto visible
3. `+1-561-484-2170` → dentro del JSON-LD (schema.org)

### Coverage areas

| Ciudad | URL | Dirección |
|---|---|---|
| Boca West | /BocaRaton | 8230 210th St S, Unit 1804, Boca West, FL 33433 |
| Plantation | /Plantation | 7901 SW 6th Ct, Ste 3201, Plantation, FL 33324 |
| North Palm Beach | /NorthPalmBeach | 4440 PGA Blvd, Ste 3017, North Palm Beach, FL 33410 |
| Delray Beach | /DelrayBeach | 55 SE 2nd Ave, Ste 4004, Delray Beach, FL 33444 |
| Coral Gables | /CoralGables | 1541 Sunset Dr, Ste B-39, Coral Gables, FL 33143 |

Cada página enlaza a las otras cuatro en "Other nearby locations", y la home
enlaza a las cinco desde "Coverage Areas".

## Fotos

El sitio funciona sin fotos (placeholders CSS). Para usar fotos reales, ver
`img/LEEME.txt`: basta con guardar `hero-garage.jpg`, `why-garage.jpg` y
`pricing-garage.jpg` en `img/`.

## Paleta

Azul marino + amarillo, en variables CSS al inicio de `css/styles.css`:

- `--navy-900 #061a33`, `--navy-800 #0b2748`, `--navy-700 #123a68`, `--blue #1668c9`
- `--accent #ffc233` (amarillo), `--accent-dark #f0ac00`, `--accent-light #ffdd7a`

Cambiando esas variables cambia el color de todo el sitio.

## SEO

Lo que ya está hecho:

- **Title y meta description únicos** por página, dentro del largo que Google muestra
  (título ≤ 60 caracteres, descripción ≈ 155).
- **Canonical** en las 6 páginas, todas con barra final (`/Plantation/`) para que
  coincidan con lo que sirve el hosting y no se dupliquen URLs.
- **Open Graph + Twitter Card** completos, con `img/hero-garage.jpg` como miniatura
  al compartir el link.
- **Datos estructurados** (validados, parsean sin errores):
  - Home: `HomeAndConstructionBusiness` (con las 4 sucursales como `department` y
    catálogo de servicios), `WebSite` y `FAQPage` — este último puede mostrar las
    preguntas desplegables directamente en el resultado de Google.
  - Cada ubicación: `HomeAndConstructionBusiness` con su dirección y catálogo, más
    `BreadcrumbList` para la miga de pan en el resultado.
- **Semántica**: un solo `<h1>` por página, jerarquía de encabezados correcta,
  landmark `<main>`, `aria-label` en la navegación y en las fotos de fondo,
  y skip link para teclado.
- **Rendimiento** (Core Web Vitals): imágenes comprimidas (440 KB en total),
  `preload` de la imagen del hero (es el LCP), CSS propio sin librerías ni fuentes
  externas, iframes de mapa con `loading="lazy"`.
- **`sitemap.xml`** con `lastmod` e imagen, **`robots.txt`** apuntando al sitemap,
  y **`.htaccess`** con compresión, cache y reglas canónicas.

### Reseñas: no llevan schema a propósito

Los testimonios de las páginas son **de relleno**, escritos por mí. No los marqué
con `Review`/`AggregateRating` porque marcar reseñas inventadas viola las políticas
de Google y puede costar una penalización manual. Cuando haya reseñas reales
(Google Business Profile), se reemplazan los textos y ahí sí se agrega el schema.

### Para hacer después de publicar

1. Verificar el dominio en **Google Search Console** y enviar el sitemap.
2. Crear/reclamar el **Google Business Profile** de cada dirección; usar exactamente
   el mismo nombre, teléfono y dirección que el sitio (NAP consistente) y enlazar
   cada ficha a su URL: `/BocaRaton/`, `/Plantation/`, etc.
3. Pasar el sitio por **PageSpeed Insights** y por el **Rich Results Test**.
4. Cuando existan redes sociales, poner los links reales en el footer y agregarlos
   como `sameAs` en el JSON-LD.

## Pendientes / a revisar

- Teléfono real (el actual es inventado).
- Enlaces de redes sociales en el footer (están en `#`).
- Reseñas reales en lugar de los textos de relleno.
- Rango de precios "$150 – $450": ajustar al real (aparece en el texto y en el schema).
- En `.htaccess`, descomentar las reglas de https/www cuando el SSL esté activo.
