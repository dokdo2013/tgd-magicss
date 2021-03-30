// var textarea1 = document.getElementById('code-html');
// var editor1 = CodeMirror.fromTextArea(textarea1, {
//     lineNumbers: true,
//     lineWrapping: true,
//     theme: "dracula",
//     mode: "text/html",
//     extraKeys: {
//         'Tab': 'emmetExpandAbbreviation',
//         'Esc': 'emmetResetAbbreviation',
//         'Enter': 'emmetInsertLineBreak',
//         'Ctrl-E': 'emmetExpandAbbreviationAll',
//         'Ctrl-Space': 'emmetCaptureAbbreviation',
//         'Ctrl-.': 'emmetEnterAbbreviationMode',
//         'Ctrl-W': 'emmetWrapWithAbbreviation',
//         'Cmd-D': 'emmetBalance',
//         'Ctrl-D': 'emmetBalanceInward',
//         'Cmd-/': 'emmetToggleComment',
//         'Cmd-Y': 'emmetEvaluateMath',
//         'Ctrl-Left': 'emmetGoToPreviousEditPoint',
//         'Ctrl-Right': 'emmetGoToNextEditPoint',
//         'Ctrl-P': 'emmetGoToTagPair',
//         'Ctrl-Up': 'emmetIncrementNumber1',
//         'Alt-Up': 'emmetIncrementNumber01',
//         'Ctrl-Alt-Up': 'emmetIncrementNumber10',
//         'Ctrl-Down': 'emmetDecrementNumber1',
//         'Alt-Down': 'emmetDecrementNumber01',
//         'Ctrl-Alt-Down': 'emmetDecrementNumber10',
//         'Ctrl-\'': 'emmetRemoveTag',
//         'Shift-Ctrl-\'': 'emmetSplitJoinTag',
//         'Shift-Ctrl-Right': 'emmetSelectNextItem',
//         'Shift-Ctrl-Left': 'emmetSelectPreviousItem',
//     },
//     val: textarea1.value,
//     tabsize: 2,
//     autoCloseTags: true,
//     emmet: {
//         markTagPairs: true,
//         config: {
//             // markup: {
//             //     snippets: {
//             //         'foo': 'ul.nav>li'
//             //     }
//             // },
//             stylesheet: {
//                 snippets: {
//                     'wh': 'width: ${1}px; height: ${1}px',
//                     "gt": "grid-template: repeat(2,auto) / repeat(auto-fit, minmax(250px, 1fr))"
//                 }
//             }
//         }
//     }
// });

// import "codeMirror/lib/";
var textarea2 = document.getElementById('code-css');
var editor2 = CodeMirror.fromTextArea(textarea2, {
    lineNumbers: true,
    lineWrapping: true,
    theme: "dracula",
    mode: "text/css",
    extraKeys: {
        'Tab': 'emmetExpandAbbreviation',
        'Esc': 'emmetResetAbbreviation',
        'Enter': 'emmetInsertLineBreak',
        'Ctrl-E': 'emmetExpandAbbreviationAll',
        'Ctrl-Space': 'emmetCaptureAbbreviation',
        'Ctrl-.': 'emmetEnterAbbreviationMode',
        'Ctrl-W': 'emmetWrapWithAbbreviation',
        'Cmd-D': 'emmetBalance',
        'Ctrl-D': 'emmetBalanceInward',
        'Cmd-/': 'emmetToggleComment',
        'Cmd-Y': 'emmetEvaluateMath',
        'Ctrl-Left': 'emmetGoToPreviousEditPoint',
        'Ctrl-Right': 'emmetGoToNextEditPoint',
        'Ctrl-P': 'emmetGoToTagPair',
        'Ctrl-Up': 'emmetIncrementNumber1',
        'Alt-Up': 'emmetIncrementNumber01',
        'Ctrl-Alt-Up': 'emmetIncrementNumber10',
        'Ctrl-Down': 'emmetDecrementNumber1',
        'Alt-Down': 'emmetDecrementNumber01',
        'Ctrl-Alt-Down': 'emmetDecrementNumber10',
        'Ctrl-\'': 'emmetRemoveTag',
        'Shift-Ctrl-\'': 'emmetSplitJoinTag',
        'Shift-Ctrl-Right': 'emmetSelectNextItem',
        'Shift-Ctrl-Left': 'emmetSelectPreviousItem',
    },
    val: textarea2.value,
    tabsize: 2,
    autoCloseTags: true,
    emmet: {
        markTagPairs: true,
        config: {
            // markup: {
            //     snippets: {
            //         'foo': 'ul.nav>li'
            //     }
            // },
            stylesheet: {
                snippets: {
                    'wh': 'width: ${1}px; height: ${1}px',
                    "gt": "grid-template: repeat(2,auto) / repeat(auto-fit, minmax(250px, 1fr))"
                }
            }
        }
    }
});