# Serie de Análisis: Reforma Laboral Argentina

Serie de análisis económicos sobre la Ley de Modernización Laboral propuesta en Argentina. Incluye análisis del impacto en trabajadores y el costo fiscal para el Estado.

## 🎯 Objetivo

Proporcionar análisis transparentes e interactivos, basados en datos públicos, del impacto económico y fiscal de la reforma laboral propuesta.

## 📊 Datos Principales

**Parte I: Impacto en Trabajadores**
- **Transferencia total:** $21 billones anuales desde trabajadores a patronal
- **Trabajadores afectados:** 12.5 millones (100% de trabajadores registrados)
- **12 retrocesos principales** analizados con calculadora interactiva

**Parte II: Costo Fiscal**
- **Costo fiscal anual:** $0,83 billones
- **% del PBI:** 0,13%
- **Calculadora interactiva** para explorar diferentes escenarios

## 🚀 Documentos de la Serie

### `index.html` - Página Principal
- Resumen de ambos análisis
- Links a las partes I y II
- Métricas principales

### `analisis-transferencia-trabajadores.html` - Parte I
- **Calculadora interactiva** de las 12 medidas
- Modificá trabajadores afectados y pérdidas por medida
- Cálculo automático de transferencia total
- Análisis interseccional del impacto diferencial
- Mobile-first y completamente responsive

### `analisis-costo-fiscal-v6.html` - Parte II
- **Calculadora interactiva** del costo fiscal
- Modificá variables económicas y fiscales
- Análisis de recaudación IVA, Ganancias y contribuciones
- Exploración de escenarios de creación de empleo

### `redirect.html` - Landing Alternativa
- Página de aterrizaje para dominio alternativo
- Resumen y link a GitHub Pages

## 💻 Características Interactivas

Ambos análisis principales son **completamente interactivos**:

**Parte I - Calculadora de Transferencias:**
- Inputs para modificar número de trabajadores afectados por medida
- Inputs para ajustar pérdida promedio por trabajador
- Actualización en tiempo real del total transferido
- Formato automático de números (billones/millones)

**Parte II - Calculadora Fiscal:**
- Inputs para variables macroeconómicas (PBI, salarios, tasas)
- Cálculo dinámico de costo fiscal
- Análisis de recuperación vía empleo
- Escenarios comparativos

## 🎨 Tecnologías

- **HTML5** semántico y accesible
- **CSS3** mobile-first con variables custom
- **JavaScript vanilla** para calculadoras interactivas
- **Google Fonts** (Archivo Black, Work Sans, IBM Plex Mono)

## 📁 Estructura del Proyecto

```
reforma-laboral/
├── index.html                                  # Página principal
├── analisis-transferencia-trabajadores.html   # Parte I (interactiva)
├── analisis-costo-fiscal-v6.html              # Parte II (interactiva)
├── redirect.html                               # Landing alternativa
├── mobile-styles.css                           # Estilos mobile-first
├── Yo.jpeg                                     # Foto de perfil
├── README.md                                   # Este archivo
└── backup/                                     # Archivos de respaldo
```

## 🔍 Fuentes de Datos

Todos los cálculos se basan en fuentes oficiales públicas:

- **INDEC** - Salarios promedio y estadísticas laborales
- **Ministerio de Trabajo (MTEySS)** - Trabajadores registrados, antigüedad, rotación
- **Proyecto de Ley oficial** - [PDF oficial](https://www.argentina.gob.ar/sites/default/files/proyecto_de_ley_de_modernizacion_laboral._vf.pdf)
- **SIPA** - Estructura de costos laborales y cargas sociales
- **Ministerio de Economía** - Datos fiscales y tributarios

Ver secciones de metodología en cada análisis para referencias completas.

## 📐 Metodología

### Parte I: Transferencia a Trabajadores

**Cálculo de Transferencias Individuales:**
```
Transferencia = Trabajadores Afectados × Pérdida Promedio Anual
```

**Calculadora Interactiva:**
- Cada medida permite modificar trabajadores afectados y pérdida promedio
- Total general = Σ(todas las medidas)
- Formato automático: billones (>$1T) o millones

**Supuestos Base (modificables):**
- Salario base: $550.000 mensuales (INDEC)
- Antigüedad promedio: 8 años
- Rotación laboral: 25% anual
- Estimaciones conservadoras (sin efectos indirectos)

### Parte II: Costo Fiscal

**Variables Modificables:**
- PBI base ($650,8 billones)
- Costos de medidas fiscales (contribuciones, blanqueo, etc.)
- Transferencia desde trabajadores ($21 billones)
- Salario mensual promedio ($880.000)
- Tasas impositivas (IVA 6,3%, Ganancias 4,5%, etc.)

**Cálculos Automáticos:**
- Costo fiscal total
- % del PBI
- Recuperación potencial vía empleo
- Salarios necesarios vs históricos

## 🌐 Deployment

Sitio desplegado en: **https://leito-monk.github.io/reforma-laboral/**

### GitHub Pages (Configurado)
El sitio se actualiza automáticamente al hacer push a la rama main.

### Dominios Alternativos
- `redirect.html` disponible para dominios alternativos
- Apunta automáticamente a GitHub Pages

### Servidor Local para Desarrollo
```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

## 🎯 Perspectiva Interseccional

El análisis de transferencias incluye el impacto diferencial en:

- 👩 **Mujeres y disidencias** - Mayor exposición a fraude laboral y precarización
- 🧑🏽 **Trabajadores racializados/migrantes** - Vulnerabilidad en tercerización
- ♿ **Personas con discapacidad** - Discriminación salarial legitimada
- 👴 **Mayores de 45 años** - Penalización por antigüedad
- 🏘️ **Economías regionales** - Barreras de acceso a justicia
- 🔧 **Trabajadores tercerizados** - Desprotección consolidada

## 📈 Análisis de Redistribución

El sitio analiza cuántos empleos deberían crearse para que la reforma sea neutra para trabajadores:

- **Con salario mínimo:** 6.6M empleos (+53%)
- **Con salario promedio:** 2.2M empleos (+18%)
- **Crecimiento histórico:** 2.5% anual
- **Necesario vs histórico:** 7.2x más

## 🤝 Contribuciones

Este análisis busca ser una herramienta de debate informado. Correcciones constructivas son bienvenidas:

1. Fork el proyecto
2. Crea una rama (`git checkout -b mejora/descripcion`)
3. Commit cambios (`git commit -m 'Mejora: descripción'`)
4. Push a la rama (`git push origin mejora/descripcion`)
5. Abre un Pull Request

### Áreas de contribución
- Correcciones de datos o cálculos
- Mejoras de accesibilidad
- Traducciones
- Optimizaciones de performance
- Nuevos análisis o visualizaciones

## 📝 Licencia

Este análisis se publica como ejercicio de transparencia y debate público. Los datos utilizados son de fuentes públicas oficiales.

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
