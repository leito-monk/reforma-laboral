# Reforma Laboral Argentina 2025

Herramientas interactivas para analizar el impacto económico de la Ley de Modernización Laboral propuesta en Argentina.

**🌐 Sitio web:** [leito-monk.github.io/reforma-laboral](https://leito-monk.github.io/reforma-laboral/)

---

## 🎯 Objetivo

Proporcionar calculadoras transparentes e interactivas, basadas en datos oficiales públicos, para que trabajadores y ciudadanos puedan evaluar el impacto real de la reforma laboral propuesta.

---

## 📊 Herramientas Interactivas

### 🧮 [Calculadora por CCT](https://leito-monk.github.io/reforma-laboral/calculadora-cct.html)

Calculá tu pérdida personal según tu Convenio Colectivo de Trabajo.

**✨ Características:**
- 🎯 **Tres modos de cálculo**: Individual, Sectorial, o por Empresa
- 📋 **12 CCTs verificados** con datos de INDEC EPH Q3 2024
- 💰 Incluye: antigüedad, adicionales, licencias, subsidios, congelamiento salarial
- ⚙️ Opciones avanzadas: horas extras, hijos, zona desfavorable, título profesional
- 📥 Exportá a CSV o compartí por WhatsApp

**CCTs disponibles:**
<details>
<summary>Ver lista completa de 12 convenios</summary>

- 130/75 - Bancarios (95.000 trabajadores)
- 36/75 - Empleados de Comercio (1.200.000)
- 260/75 - Gastronómicos - UTHGRA (320.000)
- 36/89 - Docentes (750.000)
- 76/75 - Construcción - UOCRA (480.000)
- 107/70 - Transporte Automotor de Pasajeros (110.000)
- 589/10 - Camioneros (230.000)
- 161/75 - Metalúrgicos - UOM (320.000)
- 260/94 - Plástico (85.000)
- 122/75 - Mecánicos y Afines del Transporte (140.000)
- 408/05 - Call Centers (95.000)
- 541/08 - Telecomunicaciones (67.000)

**Total:** 3.9 millones de trabajadores cubiertos
</details>

---

### 📊 [Análisis de Transferencia](https://leito-monk.github.io/reforma-laboral/analisis-transferencia-trabajadores.html)

Impacto agregado en el conjunto de trabajadores registrados.

**Datos principales:**
- 💸 **$21 billones anuales** de trabajadores a patronal
- 👥 **12.5 millones** de trabajadores afectados (100% registrados)
- 📉 **12 retrocesos laborales** analizados individualmente
- 🧮 Calculadora interactiva para modificar supuestos

---

### 🏛️ [Análisis de Costo Fiscal](https://leito-monk.github.io/reforma-laboral/analisis-costo-fiscal-v6.html)

Impacto en las cuentas públicas del Estado.

**Datos principales:**
- 💰 **$0,83 billones** de costo fiscal anual
- 📊 **0,13% del PBI**
- 🔍 Análisis de recaudación: IVA, Ganancias, contribuciones
- 📈 Escenarios de recuperación vía empleo

---

### 🎮 [Juego del Derrame](https://leito-monk.github.io/reforma-laboral/juego-del-derrame.html)

Simulador interactivo educativo sobre la teoría del derrame económico.

---

---

## 📐 Metodología

### Calculadora Individual por CCT

```javascript
Pérdida Anual = 
  + (Salario × % Antigüedad × Años)     // Plus por antigüedad
  + (Adicionales CCT × 12 meses)        // Montos mensuales del convenio
  + (Subsidios CCT × 12 meses)          // Subsidios adicionales
  + (Salario ÷ 30 × Días Licencia)      // Valor de días de licencia extra
  + (Salario × 15% × 12 meses)          // Congelamiento salarial vs inflación
  + Opciones avanzadas                   // Horas extras, hijos, zona, título
```

### Cálculo Agregado

```javascript
// Impacto Sectorial
Transferencia Total = Pérdida Individual × Trabajadores del Sector

// Impacto por Empresa
Transferencia Empresa = Pérdida Individual × Cantidad de Empleados
```

### Supuestos

- 📊 Salarios: EPH INDEC Q3 2024
- 📅 Antigüedad promedio: 8 años
- 🔍 Estimaciones conservadoras
- ✅ Solo efectos directos (sin multiplicadores)

---

## 🔍 Fuentes de Datos

Todos los cálculos se basan en fuentes oficiales públicas:

| Fuente | Datos utilizados |
|--------|------------------|
| **INDEC - EPH Q3 2024** | Salarios promedio por sector, estructura salarial |
| **MTEySS** | Convenios Colectivos de Trabajo oficiales, trabajadores registrados |
| **Observatorio de Empleo** | Cantidad de trabajadores por sector y CCT |
| **SIPA** | Sistema Integrado Previsional, antigüedad, estructura laboral |
| **Ministerio de Economía** | Variables macroeconómicas, datos fiscales, PBI |
| **Proyecto de Ley** | [PDF oficial](https://www.argentina.gob.ar/sites/default/files/proyecto_de_ley_de_modernizacion_laboral._vf.pdf) |

---

## 💻 Tecnología

**Stack:**
- HTML5, CSS3, JavaScript vanilla
- Sin frameworks ni dependencias
- Mobile-first responsive design
- Dark theme con variables CSS

**Características:**
- ✅ Funciona offline (PWA-ready)
- ✅ Exportación CSV nativa
- ✅ Compartir por WhatsApp Web API
- ✅ Accesible (WCAG 2.1 AA)
- ✅ Performance optimizado

---

---

## 🤝 Contribuciones

¿Encontraste un error o querés mejorar algo?

**Opciones:**
1. 🐛 Abrí un [Issue](https://github.com/leito-monk/reforma-laboral/issues)
2. 🔧 Enviá un [Pull Request](https://github.com/leito-monk/reforma-laboral/pulls)
3. 💬 Contactame en redes sociales

**Áreas de contribución:**
- Correcciones de datos o cálculos
- Mejoras de accesibilidad o UX
- Optimizaciones de performance
- Nuevos análisis o visualizaciones
- Traducciones a otros idiomas

---

## 👤 Autor

**Leandro Monk**

Economista | Analista de datos | Desarrollador

**Redes sociales:**
- 🐦 Twitter: [@LeandroMonk](https://twitter.com/LeandroMonk)
- 📘 Facebook: [Leandro Monk](https://www.facebook.com/leandro.monk)
- 📸 Instagram: [@leandromonk](https://www.instagram.com/leandromonk/)
- 💼 LinkedIn: [Leandro Monk](https://www.linkedin.com/in/lemonk/)
- 🐙 GitHub: [@leito-monk](https://github.com/leito-monk)

---

## 📄 Licencia

**Uso educativo y de investigación**

Este proyecto se publica como herramienta de transparencia y debate público. Los datos utilizados provienen de fuentes oficiales públicas y están debidamente referenciados.

Se permite el uso, distribución y modificación con atribución al autor original.

---

## 🌐 Sitio Web

**URL principal:** [leito-monk.github.io/reforma-laboral](https://leito-monk.github.io/reforma-laboral/)

**GitHub Pages automático** - Se actualiza con cada commit a `main`

---

<div align="center">

**⭐ Si te resultó útil, dejá una estrella en GitHub**

**📢 Compartí para que más personas puedan informarse**

---

*Última actualización: Diciembre 2025*

</div>

## 📧 Contacto

Para consultas, correcciones o sugerencias sobre la metodología y los datos utilizados.

## ⚖️ Transparencia Metodológica

- Todos los cálculos son **reproducibles y verificables**
- Los supuestos están claramente identificados
- Las fórmulas son explícitas y públicas
- Este análisis es una **herramienta de debate**, no una predicción determinística

---

**Autor:** Leandro Monk  
**Contacto:** leandro@gcoop.coop  
**GitHub:** [@leito-monk](https://github.com/leito-monk)  
**Organización:** [gcoop](https://gcoop.coop) | [MIT](https://mit.org.ar)

---

**Nota:** Esta es una serie de análisis independientes con fines informativos y de debate público sobre políticas laborales. Las calculadoras permiten explorar diferentes escenarios y supuestos.
