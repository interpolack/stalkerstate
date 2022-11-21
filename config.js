var config = {
    style: 'mapbox://styles/petepolack/cl9dva52m000t15s0vs49n90u',
    // 'mapbox://styles/mapbox/light-v10'
    // 'mapbox://styles/petepolack/cl9dm6e3v000315sa93gzlafi',
    // 'mapbox://styles/petepolack/cl9dva52m000t15s0vs49n90u'
    // mapbox://styles/petepolack/cl9dg8jvw000014rl64be1atm
    accessToken: 'pk.eyJ1IjoicGV0ZXBvbGFjayIsImEiOiI3ZWFlZTk5MjlkMGM0NzcyY2VjZjExY2Y4NTk2ZDY1OSJ9.YOmQRXl4E2EK1xSw675esg',
    showMarkers: false,
    projection: 'globe',
    'icon-allow-overlap': true,
    inset: true,
    theme: 'dark',
    use3dTerrain: true,
    footer: 'For more information and resources, visit <a href="https://stoplapdspying.org" target="_blank">StopLAPDspying.org</a>',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            description: 'From a distance, police violence appears removed from place and personality – a statistic that attests to something larger than comprehension. But while police killings are branded to be something that happens as a reaction to criminal behavior, behind every victim is a systematic organization of violence. Here, we take a closer look at how this appears in the age of "data-driven policing."',
            location: {
                center: [-118.366833, 33.978098],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'oih',
                  opacity: 1
              },
              {
                  layer: 'waterway-label',
                  opacity: 0
              },
              {
                  layer: 'hotspots2015',
                  opacity: 0
              },
              {
                  layer: 'hotspots2018',
                  opacity: 0
              },
              {
                  layer: 'skidrow',
                  opacity: 0
              },
              {
                  layer: 'anchorpoints',
                  opacity: 0
              },
              {
                  layer: 'cspsites',
                  opacity: 0
              },
              {
                  layer: 'laserzones',
                  opacity: 0
              }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'predpol',
            alignment: 'right',
            hidden: false,
            title: 'PredPol',
            image: 'img/predpol.png',
            description: 'In 2010, the Los Angeles Police Department began using PredPol, now known as Geolitica, a software system that advertised the ability to predict the location of crimes. While PredPol was supposed to mark the city with <b style="color: #ff0000">hotspots</b> that would reveal where crime would occur, the actual location of these hotspots turned out to reveal something else.',
            location: {
                center: [-118.245414, 34.037463],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'hotspots2015',
                  opacity: 1
              },
              {
                  layer: 'hotspots2018',
                  opacity: 1
              }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            description: 'Skid Row is a neighborhood in Downtown Los Angeles that has been subjected to constant and concentrated state violence. Once unofficially designated a "containment zone" in 1976, Skid Row continues to be a place where houseless people are abandoned and policed. When the Stop LAPD Spying Coalition filed a records request to reveal the PredPol hotspots in Central Division – the LAPD jurisdiction that includes Downtown and Skid Row – it became apparent that the hotspots were effectively bordering Skid Row. Despite its appeals to mathematical objectivity, PredPol worked to make Skid Row into a data-driven "containment zone" just like in 1976.',
            location: {
                center: [-118.243667, 34.043489],
                zoom: 15,
                pitch: 42.9,
                bearing: 63.22,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'skidrow',
                  opacity: 1
              },
              {
                  layer: 'building-extrusion',
                  opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Anchor Points',
            description: 'Taking a closer look, we see another way that the LAPD contains, controls, and criminalizes marginalized communities: Anchor Points. Anchor Points are physical locations like intersetions and residential buildings that the LAPD labels as contributing to crime. This area shows an abnormally dense number of Anchor Points, located at the threshold of Skid Row and Downtown Los Angeles, where skyscrapers are visible. Such designations, while they may be invisible to passers-by, enforce invisible borders where marginalized people are policed at gentrifying areas. ', // What exactly is going on at an Anchor Point? Anchor Points are often residential units, like this one.
            location: {
                center: [-118.243667, 34.043489],
                zoom: 15,
                pitch: 42.9,
            },
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'anchorpoints',
                  opacity: 1
              },
            ],
            onChapterExit: []
        },
        {
            id: 'rosslyn',
            alignment: 'left',
            hidden: false,
            title: 'Rosslyn Hotel',
            image: 'img/rosslyn.png',
            description: 'The Rosslyn Hotel is one of the Anchor Points at the Skid Row border. Renovated as a residence for unhoused people in 2014, the Rosslyn was designated as an Anchor Point in order to police inhabitants and the adjacent Skid Row community. At the border between Skid Row and gentrified developments, the Rosslyn Hotel is a key site of the border for policing the Skid Row community.', // What exactly is going on at an Anchor Point? Anchor Points are often residential units, like this one.
            location: {
                center: [-118.249, 34.046813],
                zoom: 17,
                // bearing: -100,
                pitch: 70,
            },
            callback: '',
            rotateAnimation: true,
            onChapterEnter: [
              // {
              //     layer: '3d-model',
              //     opacity: 1
              // },
              {
                  layer: 'building-extrusion',
                  opacity: 0
              }
            ],
            onChapterExit: [
              // {
              //     layer: '3d-model',
              //     opacity: 0
              // },
              {
                  layer: 'building-extrusion',
                  opacity: 1
              }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',//'fully',
            hidden: false,
            title: 'LASER Zones',
            description: 'In addition to Skid Row, Anchor Points also tend to border <b style="color: #ff0000">LASER Zones</b>, regions that the LAPD designated as criminal for enhanced policing. Like PredPol, while LASER Zones are branded as something brand new and technological, they simply overlapped with existing police practices, like gang injunction areas. But LASER Zones took surveillance to the next level by ranking individuals in each Zone according to a point-based system, whereby high-ranking individuals would be subjected to additional surveillance.',
            location: {
                center: [-118.337565, 34.028014],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'oih',
                  opacity: 0
              },
              {
                  layer: 'laserzones',
                  opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'rebrand',
            alignment: 'fully',//'fully',
            hidden: false,
            description: 'While Los Angeles communities organized to pressure the LAPD into disbanding PredPol and LASER Zones, systems like these are versions of longstanding police practices that are always being rebranded. <b style="color: #ff8200">Community Safety Partnership (CSP) sites</b>, for example, operate like Anchor Points and LASER Zones to justify enhanced surveillance in particular areas. ',
            location: {
              center: [-118.337565, 34.028014],
              zoom: 11,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'cspsites',
                  opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'avalon',
            alignment: 'left',//'fully',
            hidden: false,
            image: 'img/avalon.png',
            description: 'If we zoom in on a CSP site, we can see the types of targets it includes. This is Avalon Gardens, a public housing project that was once potrayed as "war zone" for its association with low-income residents, drug use, and gang activity. $1.7 million renovations to the development in 1996 focused more restricting activity in and out of the premises, which did not cut down on crime, but contributed to the continual policing of the area. ',
            location: {
                center: [-118.262945, 33.957524],
                zoom: 17,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              // {
              //     layer: '3d-model2',
              //     opacity: 1
              // }
            ],
            onChapterExit: [
              // {
              //     layer: '3d-model2',
              //     opacity: 0
              // }
            ]
        },
        {
            id: 'lpr',
            alignment: 'left',//'fully',
            hidden: false,
            bigImage: 'img/lpr.png',
            description: 'CSP sites justify the continual policing of certain areas, which includes installing more surveillance technology. The most common surveillance technologies are CCTV cameras and license plate readers (LPRs), which are installed at vehicle-accessible entrances to communities like this one at Avalon Gardens.',
            location: {
                center: [ -118.261267, 33.956577],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              // {
              //     layer: '3d-model2',
              //     opacity: 1
              // }
            ],
            onChapterExit: [
              // {
              //     layer: '3d-model2',
              //     opacity: 0
              // }
            ]
        },
        {
            id: 'fusion',
            alignment: 'left',//'fully',
            hidden: false,
            description: '[fusion centers]',
            location: {
                center: [-118.366833, 33.978098],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              // {
              //     layer: '3d-model2',
              //     opacity: 1
              // }
            ],
            onChapterExit: [
              // {
              //     layer: '3d-model2',
              //     opacity: 0
              // }
            ]
        }
    ]
};
