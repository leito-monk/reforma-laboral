# Diferencias: Calculadora actual vs Scripts generados

## Resumen ejecutivo

Los scripts generados revelan **diferencias importantes** entre los datos de la calculadora y las referencias oficiales:

### Problema principal: **La calculadora tiene datos inventados**

Los scripts solo pudieron validar **salarios de referencia** (basados en EPH INDEC Q3 2024), pero NO tienen datos para:
- ❌ Cantidad de trabajadores específicos por CCT
- ❌ Adicionales mensuales de cada CCT
- ❌ Licencias extra por CCT
- ❌ Subsidios específicos por CCT

**Resultado**: El JSON generado muestra `null` en todos estos campos porque los scripts no pudieron encontrar fuentes oficiales.

---

## Comparación detallada

### 1. **Salarios de referencia** (scripts vs calculadora)

| CCT | Script (EPH INDEC) | Calculadora actual | Diferencia | % Dif |
|-----|-------------------|-------------------|-----------|-------|
| **130/75 - Bancarios** | $850.000 | $850.000 | $0 | 0% ✅ |
| **36/75 - Comercio** | $520.000 | $520.000 | $0 | 0% ✅ |
| **260/75 - Gastronómicos** | $450.000 | $450.000 | $0 | 0% ✅ |
| **36/89 - Docentes** | $580.000 | $580.000 | $0 | 0% ✅ |
| **76/75 - Construcción** | $550.000 | $550.000 | $0 | 0% ✅ |
| **107/70 - Transporte** | $680.000 | $680.000 | $0 | 0% ✅ |
| **589/10 - Camioneros** | $720.000 | $720.000 | $0 | 0% ✅ |
| **161/75 - Metalúrgicos** | $590.000 | $590.000 | $0 | 0% ✅ |
| **260/94 - Plástico** | $540.000 | $540.000 | $0 | 0% ✅ |
| **122/75 - Mecánicos** | $680.000 | $560.000 | **+$120.000** | +21% ⚠️ |
| **408/05 - Call Centers** | $420.000 | $420.000 | $0 | 0% ✅ |
| **541/08 - Telecomunicaciones** | $670.000 | $670.000 | $0 | 0% ✅ |

**Conclusión salarios**: Solo 1 diferencia significativa (Mecánicos), el resto coincide.

---

### 2. **Trabajadores por CCT** 

#### Lo que dice la calculadora:

| CCT | Calculadora | Script | Estado |
|-----|-------------|--------|--------|
| 130/75 - Bancarios | 95.000 | `null` (sin datos) | ❌ No verificable |
| 36/75 - Comercio | 1.200.000 | `null` | ❌ No verificable |
| 260/75 - Gastronómicos | 320.000 | `null` | ❌ No verificable |
| **257/92 - Empleados Públicos** | **850.000** | **NO INCLUIDO** | ⚠️ CCT a verificar |
| 36/89 - Docentes | 750.000 | `null` | ❌ No verificable |
| 76/75 - Construcción | 480.000 | `null` | ❌ No verificable |
| **40/89 - Salud** | **420.000** | **NO INCLUIDO** | ⚠️ CCT a verificar |
| 107/70 - Transporte | 110.000 | `null` | ❌ No verificable |
| 589/10 - Camioneros | 230.000 | `null` | ❌ No verificable |
| **56/92 - Telefónicos** | **45.000** | **NO INCLUIDO** | ⚠️ Redundante con 541/08 |
| **566/10 - Seguridad Privada** | **180.000** | **NO INCLUIDO** | ⚠️ CCT a verificar |
| **335/75 - Vigilancia** | **95.000** | **NO INCLUIDO** | ⚠️ Redundante con 566/10 |
| **397/04 - Deportivas** | **35.000** | **NO INCLUIDO** | ⚠️ CCT a verificar |
| 161/75 - Metalúrgicos | 320.000 | `null` | ❌ No verificable |
| 260/94 - Plástico | 85.000 | `null` | ❌ No verificable |
| 122/75 - Mecánicos | 140.000 | `null` | ❌ No verificable |
| 408/05 - Call Centers | 95.000 | `null` | ❌ No verificable |
| 541/08 - Telecomunicaciones | 67.000 | `null` | ❌ No verificable |

**Problema**: Los scripts no pudieron encontrar fuentes oficiales para validar estos números. Los datos de la calculadora parecen estimaciones o datos de fuentes no oficiales.

---

### 3. **Beneficios del CCT** (adicionales, licencias, subsidios)

#### Calculadora actual (ejemplo):
```javascript
'130/75': { // Bancarios
    adicionales: 45000,      // ❌ No verificable
    licenciasExtra: 3,       // ❌ No verificable
    subsidios: 25000         // ❌ No verificable
}
```

#### Script generado:
```json
"130/75": {
    "adicionales": null,     // ⚠️ Sin fuente oficial
    "licenciasExtra": null,  // ⚠️ Sin fuente oficial
    "subsidios": null        // ⚠️ Sin fuente oficial
}
```

**Todos los beneficios del CCT en la calculadora NO son verificables** con los scripts porque:
- No hay una fuente estructurada oficial disponible
- Cada CCT publica sus escalas en el Boletín Oficial (PDFs)
- Se requiere lectura manual de cada texto de convenio

---

## CCTs problemáticos

### ❌ Incluidos en la calculadora pero NO validados:

1. **257/92 - Empleados Públicos**
   - Calculadora: 850.000 trabajadores, $620.000 salario
   - Script: CCT marcado como "A VERIFICAR"
   - Problema: Nombre y número pueden no ser correctos
   - Acción: Validar manualmente

2. **40/89 - Salud**
   - Calculadora: 420.000 trabajadores, $650.000 salario
   - Script: CCT marcado como "A VERIFICAR"
   - Problema: Número puede no ser el correcto (hay múltiples CCT de salud)
   - Acción: Validar número específico

3. **56/92 - Telefónicos**
   - Calculadora: 45.000 trabajadores, $780.000 salario
   - Script: Marcado como posiblemente redundante con 541/08 (Telecomunicaciones)
   - Problema: Puede ser el mismo sector
   - Acción: Decidir si mantener ambos o consolidar

4. **566/10 - Seguridad Privada** + **335/75 - Vigilancia**
   - Calculadora: Dos CCTs separados (180k + 95k trabajadores)
   - Script: Marcados como posiblemente redundantes
   - Problema: Pueden ser el mismo sector
   - Acción: Verificar si son distintos o consolidar

5. **397/04 - Empleados de Entidades Deportivas**
   - Calculadora: 35.000 trabajadores, $510.000 salario
   - Script: CCT marcado como "A VERIFICAR"
   - Problema: Sector muy específico, datos sin validar
   - Acción: Validar manualmente

---

## Acciones recomendadas

### Corto plazo (hacer ahora)

1. **✅ Aceptar que los salarios están correctos** (coinciden con EPH INDEC Q3 2024)
2. **⚠️ Corregir el salario de Mecánicos** (122/75): $560.000 → $680.000
3. **⚠️ Decidir sobre CCTs duplicados**:
   - 56/92 (Telefónicos) vs 541/08 (Telecomunicaciones)
   - 566/10 (Seguridad) vs 335/75 (Vigilancia)
4. **⚠️ Validar o eliminar CCTs problemáticos**:
   - 257/92 (Empleados Públicos)
   - 40/89 (Salud)
   - 397/04 (Deportivas)

### Mediano plazo (para validación completa)

1. **Buscar fuentes oficiales para cantidad de trabajadores**:
   - MTEySS Observatorio de Empleo: https://www.argentina.gob.ar/trabajo/estadisticas/oede
   - SIPA (Sistema Integrado Previsional Argentino)
   - Informes de sindicatos

2. **Leer los CCTs completos para beneficios**:
   - Descargar PDFs del Boletín Oficial
   - Extraer adicionales, licencias y subsidios de cada texto
   - Documentar fuentes para cada dato

3. **Usar el CSV generado** (`validacion_cct_2025-12-26_12-36-45.csv`):
   - Completar campos manualmente con fuentes oficiales
   - Usar los links en `links_verificacion_2025-12-26_12-36-45.txt`
   - Documentar cada fuente en la columna "Notas"

---

## Conclusión

### ¿Los datos de la calculadora son correctos?

- **Salarios**: ✅ 11/12 correctos (91.7%)
- **Trabajadores**: ❌ NO VERIFICABLES con fuentes oficiales automáticas
- **Beneficios CCT**: ❌ NO VERIFICABLES con fuentes oficiales automáticas
- **CCTs problemáticos**: ⚠️ 6 de 18 (33%) necesitan validación manual

### Recomendación final

Los **salarios están bien** (usan EPH INDEC), pero **el resto de los datos (trabajadores, adicionales, licencias, subsidios) NO son verificables automáticamente** y probablemente son estimaciones.

**Opciones**:

1. **Opción conservadora**: Eliminar los CCTs problemáticos (257/92, 40/89, 56/92, 566/10, 335/75, 397/04) y quedarse solo con los 12 verificados
2. **Opción documentada**: Mantener todos los CCTs pero agregar un disclaimer indicando que algunos datos son estimaciones
3. **Opción completa**: Validar manualmente cada CCT leyendo los textos oficiales (trabajo intensivo)

¿Qué querés hacer?
