# Análisis Económico: Reforma Laboral Argentina

Análisis del impacto económico de la Ley de Modernización Laboral propuesta en Argentina, mostrando la transferencia de recursos desde trabajadores hacia la patronal.

## 🎯 Objetivo

Proporcionar un análisis transparente, basado en datos públicos, del impacto económico de los principales retrocesos laborales propuestos en el proyecto de ley.

## 📊 Datos Principales

- **Transferencia total:** $21 billones anuales desde trabajadores a patronal
- **Trabajadores afectados:** 12.5 millones (100% de trabajadores registrados)
- **12 retrocesos principales** analizados en detalle
- **Análisis interseccional** del impacto diferencial por sector social

## 🚀 Versiones Disponibles

### `index.html` - Versión Original
- Diseño completo con todas las funcionalidades
- Incluye sistema de comentarios Hypothesis (desktop)
- Animaciones y efectos visuales avanzados

### `mobile.html` - Versión Mobile-First
- Optimizada para dispositivos móviles
- CSS construido desde mobile hacia desktop
- Sin problemas de overflow
- Carga más rápida y ligera

## 💬 Sistema de Comentarios

El sitio utiliza **[Hypothesis](https://hypothes.is/)** para permitir comentarios colaborativos estilo Google Docs:

- Selecciona cualquier texto para comentar
- Los comentarios son públicos y permanentes
- Solo disponible en versión desktop (>768px)

## 🎨 Tecnologías

- **HTML5** semántico y accesible
- **CSS3** con variables custom y mobile-first
- **JavaScript vanilla** para interacciones
- **Hypothesis** para anotaciones colaborativas
- **Google Fonts** (Archivo Black, Work Sans)

## 📁 Estructura del Proyecto

```
reforma-laboral/
├── index.html           # Versión original
├── mobile.html          # Versión mobile-first
├── styles.css           # Estilos versión original
├── mobile-styles.css    # Estilos mobile-first
├── script.js            # JavaScript común
└── README.md           # Este archivo
```

## 🔍 Fuentes de Datos

Todos los cálculos se basan en fuentes oficiales públicas:

- **INDEC** - Salarios promedio y estadísticas laborales
- **Ministerio de Trabajo (MTEySS)** - Trabajadores registrados, antigüedad, rotación
- **Proyecto de Ley oficial** - Artículos específicos citados
- **SIPA** - Estructura de costos laborales y cargas sociales

Ver sección "Fuentes y Referencias" en el sitio para enlaces completos.

## 📐 Metodología

### Cálculo de Transferencias Individuales
```
Transferencia = Salario Base × Antigüedad × % Reducción del Derecho
```

### Cálculo de Afectados Anuales
```
Afectados = Trabajadores Totales × Tasa Rotación × % Casos Aplicables
```

### Cálculo de Impacto Total
```
Impacto Total = Σ(Transferencia Individual × Afectados)
```

### Supuestos Conservadores
- Salario base: $550.000 mensuales (promedio INDEC octubre 2024)
- Antigüedad promedio: 8 años
- Rotación laboral: 25% anual
- No se incluyen costos indirectos ni efectos de segunda ronda

## 🌐 Deployment

### Opción 1: GitHub Pages
```bash
# En la configuración del repositorio
Settings > Pages > Source: main branch
```

### Opción 2: Netlify/Vercel
Simplemente conecta el repositorio y deploy automático.

### Opción 3: Servidor estático
```bash
# Cualquier servidor web estático funciona
python -m http.server 8000
# o
npx serve
```

## 🎯 Perspectiva Interseccional

El análisis incluye el impacto diferencial en:

- 👩 **Mujeres y disidencias** - Mayor exposición a fraude laboral
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

## 🔄 Actualizaciones

- **Diciembre 2024** - Versión inicial basada en proyecto de ley oficial
- Datos actualizados con información de INDEC octubre 2024

---

**Nota:** Este es un análisis independiente con fines informativos y de debate público sobre políticas laborales.
