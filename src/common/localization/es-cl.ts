// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { IAppStrings } from "../strings";

/*eslint-disable no-template-curly-in-string, no-multi-str*/

/**
 * App Strings for Spanish language
 */
export const spanish: IAppStrings = {
    appName: "Herramienta de etiquetado de formularios OCR",
    projectService: {
        existingLabelFiles: "",
    },
    common: {
        displayName: "Nombre para Mostrar",
        description: "Descripción",
        submit: "Enviar",
        cancel: "Cancelar",
        save: "Guardar",
        delete: "Borrar",
        provider: "Proveedor",
        homePage: "Página de Inicio",
        reload: "Recargar",
        skipToMainContent: "Saltar al contenido principal",
        skipToSidebar: "Saltar a la barra lateral",
    },
    titleBar: {
        help: "Ayuda",
        minimize: "Minimizar",
        maximize: "Maximizar",
        restore: "Restaurar",
        close: "Cerrar",
    },
    homePage: {
        title: "Página de Inicio",
        newProject: "Nuevo Proyecto",
        recentProjects: "Proyectos Recientes",
        openLocalProject: {
            title: "Abrir Proyecto Local",
        },
        openCloudProject: {
            title: "Abrir Proyecto de la Nube",
            selectConnection: "Select a Connection",
        },
        deleteProject: {
            title: "Borrar Proyecto",
            confirmation: "¿Está seguro que quiere borrar el proyecto",
        },
        importProject: {
            title: "Importar Proyecto",
            confirmation: "¿Está seguro que quiere convertir el proyecto ${project.file.name} " +
                "a formato v2? Le recomendamos que haga una copia de seguridad de su archivo de proyecto.",
        },
        messages: {
            deleteSuccess: "${project.name} eliminado correctamente",
        },
    },
    appSettings: {
        title: "Configuración de Aplicación",
        storageTitle: "Configuración de Almacenamiento",
        uiHelp: "Donde se guardan sus configuraciones",
        save: "Guardar configuración",
        securityToken: {
            name: {
                title: "Nombre",
            },
            key: {
                title: "Clave",
            },
        },
        securityTokens: {
            title: "Tokens de seguridad",
            description: "Los tokens de seguridad se utilizan para cifrar datos confidenciales \
                dentro de la configuración del proyecto",
        },
        version: {
            description: "Versión:",
        },
        commit: "Cometer SHA",
        devTools: {
            description: "Abrir herramientas de desarrollo de aplicaciones para ayudar a diagnosticar problemas.",
            button: "Alternar Herramientas de Desarrollo",
        },
        reload: {
            description: "Recargar la aplicación descartando todos los cambios actuales",
            button: "Recargar la aplicación",
        },
        messages: {
            saveSuccess: "Configuración de la aplicación guardada correctamente",
        },
    },
    projectSettings: {
        title: "Configuración de Proyecto",
        securityToken: {
            title: "Token de seguridad",
            description: "Se utiliza para cifrar datos confidenciales dentro de archivos de proyecto",
        },
        save: "Guardar el Proyecto",
        sourceConnection: {
            title: "Conexión de Origen",
            description: "De donde se gargan sus activos",
        },
        targetConnection: {
            title: "Conexión de Destino",
            description: "Donde se guarda su proyecto y sus datos exportados",
        },
        videoSettings: {
            title: "Ajustes de video",
            description: "La velocidad a la que se extraen los marcos para el etiquetado.",
            frameExtractionRate: "Tasa de extracción de cuadros (cuadros por segundo de video)",
        },
        addConnection: "Agregar Conexión",
        messages: {
            saveSuccess: "Guardado correctamente ${project.name} configuración del proyecto",
            projectExisted: "Un proyecto con el nombre ${project.name} ya existe, por favor utilice otro nombre.",
        },
    },
    train: {
        title: "Entrenar",
        training: "Entrenamiento",
        pleaseWait: "Por favor espera",
        notTrainedYet: "Aún no entrenado",
    },
    predict: {
        title: "Predecir",
        uploadFile: "Subir archivo",
    },
    projectMetrics: {
        title: "Métricas del proyecto",
        assetsSectionTitle: "Activos",
        totalAssetCount: "Total de activos",
        visitedAssets: "Activos visitados (${count})",
        taggedAssets: "Activos etiquetados (${count})",
        nonTaggedAssets: "Activos no etiquetados (${count})",
        nonVisitedAssets: "Activos no visitados (${count})",
        tagsSectionTitle: "Etiquetas & etiquetas",
        totalRegionCount: "Total de regiones",
        totalTagCount: "Total de etiquetas",
        avgTagCountPerAsset: "Recuento promedio de etiquetas por activo",
    },
    tags: {
        title: "Etiquetas",
        placeholder: "Agregar nuevo etiqueta",
        editor: "Editor de Etiquetas",
        modal: {
            name: "Nombre de Etiqueta",
            color: "Color de Etiqueta",
        },
        colors: {
            white: "Blanco",
            gray: "Gris",
            red: "Rojo",
            maroon: "Granate",
            yellow: "Amarillo",
            olive: "Olivo",
            lime: "Lima",
            green: "Verde",
            aqua: "Aqua",
            teal: "Trullo",
            blue: "Azul",
            navy: "Azul Marino",
            fuschia: "Fuschia",
            purple: "Púrpura",
        },
        warnings: {
            existingName: "Nombre de etiqueta ya existe. Elige otro nombre",
            emptyName: "El nombre de etiqueta no puede ser vacío",
            unknownTagName: "Desconocido",
        },
        toolbar: {
            add: "Agregar nueva etiqueta",
            contextualMenu: "Menú contextual",
            delete: "Borrar etiqueta",
            edit: "Editar etiqueta",
            format: "Seleccionar formato",
            lock: "Bloquear etiqueta",
            moveDown: "Mover etiqueta hacia abajo",
            moveUp: "Mover etiqueta hacia arriba",
            rename: "Renombrar etiqueta",
            search: "Buscar entre etiquetas",
            type: "Seleccione tipo",
            vertiline: "Linea vertical",
        },
    },
    connections: {
        title: "Conexiones",
        new: "Nueva conexión",
        save: "Guardar Conexión",
        details: "Detalles de Conexión",
        settings: "Configuración de Conexión",
        instructions: "Por favor seleccione una conexión para editar",
        messages: {
            saveSuccess: "${connection.name} guardado correctamente",
            deleteSuccess: "${connection.name} eliminado correctamente",
        },
        imageCorsWarning: "Advertencia: Cuando se usa VoTT en un navegador web, es posible que algunos activos de este \
                          Búsqueda de Imágenes Bing no se exporten correctamente debido a las restricciones de CORS \
                          (Recursos de Origen Cruzado).",
        blobCorsWarning: "Advertencia: CORS (Recursos de Origen Cruzado) debe estar habilitado en la \
                          cuenta de Azure Blob Storage para poder usarlo como una conexión de origen o destino. Puede \
                          encontrar más información sobre cómo habilitar CORS en la {0}.",
        azDocLinkText: "documentación de Azure.",
        providers: {
            azureBlob: {
                title: "Azure blob container",
                description: "",
                accountName: {
                    title: "Nombre de cuenta",
                    description: "",
                },
                containerName: {
                    title: "Nombre del contenedor",
                    description: "",
                },
                sas: {
                    title: "SAS",
                    description: "Firma de acceso compartido utilizada para autenticarse en la cuenta de BLOB Storage",
                },
                createContainer: {
                    title: "Crear contenedor",
                    description: "Crea el contenedor de blobs si aún no existe",
                },
            },
            bing: {
                title: "Búsqueda de Imágenes Bing",
                options: "Opciones de Búsqueda de Imágenes Bing",
                apiKey: "Clave API",
                query: "Consulta",
                aspectRatio: {
                    title: "Relación de Aspecto",
                    all: "Todos",
                    square: "Cuadrado",
                    wide: "Ancho",
                    tall: "Alto",
                },
            },
            local: {
                title: "Sistema de Archivos Local",
                folderPath: "Ruta de la carpeta",
                selectFolder: "Seleccionar la carpeta",
                chooseFolder: "Elijir la carpeta",
            },
        },
    },
    editorPage: {
        title: "Editora",
        width: "Anchura",
        height: "Altura",
        tagged: "Etiquetado",
        visited: "Visitado",
        toolbar: {
            select: "Seleccionar",
            pan: "Pan",
            drawRectangle: "Dibujar Rectángulo",
            drawPolygon: "Dibujar Polígono",
            copyRectangle: "Copia rectángulo",
            copy: "Copiar regiones",
            cut: "Cortar regiones",
            paste: "Pegar regiones",
            removeAllRegions: "Eliminar Todas Las Regiones",
            previousAsset: "Activo anterior",
            nextAsset: "Siguiente activo",
            saveProject: "Guardar Proyecto",
            exportProject: "Exprtar Proyecto",
            activeLearning: "Aprendizaje Activo",
        },
        videoPlayer: {
            previousTaggedFrame: {
                tooltip: "Fotograma etiquetado anterior",
            },
            nextTaggedFrame: {
                tooltip: "Siguiente marco etiquetado",
            },
            previousExpectedFrame: {
                tooltip: "Fotograma anterior",
            },
            nextExpectedFrame: {
                tooltip: "Siguiente marco",
            },
        },
        help: {
            title: "Abrir/cerrar el menú de ayuda",
            escape: "Escapar el menú de ayuda",
        },
        assetError: "No se puede mostrar el activo",
        tags: {
            hotKey: {
                apply: "Aplicar etiqueta con tecla de acceso rápido",
                lock: "Bloquear etiqueta con tecla de acceso rápido",
            },
            rename: {
                title: "Cambiar el nombre de la etiqueta",
                confirmation: "¿Está seguro que quiere cambiar el nombre de esta etiqueta? \
                Será cambiada en todos los activos",
            },
            delete: {
                title: "Delete Tag",
                confirmation: "¿Está seguro que quiere borrar esta etiqueta? Será borrada en todos \
                los activos y en las regiones donde esta etiqueta sea la única, la region también será borrada",
            },
        },
        canvas: {
            removeAllRegions: {
                title: "Borrar Regiones",
                confirmation: "¿Está seguro que quiere borrar todas las regiones?",
            },
        },
        messages: {
            enforceTaggedRegions: {
                title: "Las regiones no válidas detectadas",
                description: "1 o más regiones no se han etiquetado.  \
                    Por favor, etiquete todas las regiones antes de continuar con el siguiente activo.",
            },
        },
    },
    profile: {
        settings: "Configuración de Perfíl",
    },
    errors: {
        unknown: {
            title: "Error desconocido",
            message: "La aplicación contó un error desconocido.  Por favor inténtalo de nuevo.",
        },
        projectUploadError: {
            title: "Error al cargar el archivo",
            message: `Se ha cargado un error al cargar el archivo.
                Compruebe que el archivo es del tipo correcto e inténtelo de nuevo.`,
        },
        genericRenderError: {
            title: "Error desconocido",
            message: "La aplicación contó un error desconocido.  Por favor inténtalo de nuevo.",
        },
        projectInvalidSecurityToken: {
            title: "Error al cargar el archivo de proyecto",
            message: "Asegúrese de que el token de seguridad del proyecto existe",
        },
        projectInvalidJson: {
            title: "Error al analizar el archivo de proyecto",
            message: "El archivo de proyecto no es válido JSON",
        },
        projectDeleteError: {
            title: "Error al eliminar el proyecto",
            message: `Se ha producido un error al eliminar el proyecto.
                Validar el archivo de proyecto y el token de seguridad existen e inténtelo de nuevo`,
        },
        projectNotFound: {
            title: "",
            message: "",
        },
        securityTokenNotFound: {
            title: "Error al cargar el archivo del proyecto",
            message: `El token de seguridad al que hace referencia el proyecto no se encuentra en la
                configuración de la aplicación actual. Compruebe que existe el token de seguridad e intente
                volver a cargar el proyecto.`,
        },
        canvasError: {
            title: "Error al cargar el lienzo",
            message: `Se produjo un error al cargar el lienzo, verifique los activos del
                proyecto y vuelva a intentarlo.`,
        },
        importError: {
            title: "Error al importar el proyecto V1",
            message: "Hubo un error al importar el proyecto V1. Revisa el archivo del proyecto y vuelve a intentarlo",
        },
        pasteRegionTooBigError: {
            title: "Error al pegar region al activo",
            message: "Hubo un error al pagar el region al activo. Intenta copiar otra region",
        },
        exportFormatNotFound: {
            title: "Error exportando proyecto",
            message: `Proyecto falta el formato de exportación. Seleccione un formato de exportación en la página
            de configuración de exportación.`,
        },
        activeLearningPredictionError: {
            title: "Error de aprendizaje",
            message: "Se ha producido un error al predecir regiones en el activo actual. \
                Compruebe la configuración de aprendizaje activa y vuelva a intentarlo",
        },
        blobContainerIONotFound: {
            title: "",
            message: "",
        },
        blobContainerIOForbidden: {
            title: "",
            message: "",
        },
        projectDeleteForbidden: {
            title: "",
            message: "",
        },
        projectDeleteNotFound: {
            title: "",
            message: "",
        },
        predictWithoutTrainForbidden: {
            title: "",
            message: "",
        },
        missingRequiredFieldInLabelFile: {
            title: "",
            message: "",
        },
        noLabelInLabelFile: {
            title: "",
            message: "",
        },
        duplicateFieldKeyInLabelsFile: {
            title: "",
            message: "",
        },
        invalidJSONFormat: {
            title: "",
            message: "",
        },
        sameLabelInDifferentPageError: {
            title: "",
            message: "",
        },
        duplicateBoxInLabelFile: {
            title: "",
            message: "",
        },
        endpointConnectionError: {
            title: "",
            message: "",
        },
        tooManyRequests: {
            title: "",
            message: "",
        },
        modelCountLimitExceeded: {
            title: "",
            message: "",
        },
    },
};

/*eslint-enable no-template-curly-in-string, no-multi-str*/
