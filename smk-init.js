SMK.INIT( {
    containerSel: '#smk-map-frame',
    config: [ './smk-config.json', './config/route-planner.json', '?' ]
} )
.then( function ( smk ) {
    // SMK initialized
    window.L_DISABLE_3D = true;

    var dialog = document.getElementById( 'disclaimer' )
    include( [ { url: './fragments/disclaimer.html' }, { url: './fragments/disclaimer.css' } ], 'disclaimer' ).then( function ( inc ) {
        dialog.innerHTML = inc[ 'disclaimer.disclaimer-html' ]
        dialogPolyfill.registerDialog(dialog)
        dialog.showModal()
    } )

    SMK.HANDLER.set('DirectionsRouteTool', 'print', function(smk, tool, key, opt) {
        if ( opt.debug ) {
            window.open( 'print-directions-portrait.html?' + key, '', [
                "location=yes",
                "menubar=yes",
                "titlebar=yes",
                "status=yes",
                "toolbar=yes",
                "scrollbars=yes",
            ].join( ',' ) );
        }
        else {
            document.getElementById( 'print-holder' ).src = 'print-directions-portrait.html?' + key;
        }
        
        return new Promise( function ( res, rej ) {
            var handler = function ( ev ) {
                console.log( ev );
                if ( ev.data == 'printed' ) {
                    res();
                    window.removeEventListener( 'message', handler );
                }
            };

            window.addEventListener( 'message', handler, false );

            setTimeout( function () { rej( new Error( 'timeout' ) ) }, 30 * 1000 );
        });
    });
} )
