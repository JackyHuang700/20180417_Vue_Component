import Vue from 'vue'
import VueIziToast from 'vue-izitoast'

import 'izitoast/dist/css/iziToast.min.css'
Vue.use(VueIziToast)

const position = {
  topCenter: 'topCenter',
  topLeft: 'topLeft',
  topRight: 'topRight',
  center: 'center',
  bottomCenter: 'bottomCenter',
  bottomLeft: 'bottomLeft',
  bottomRight: 'bottomRight'
}

const notificationSystem = {
  options: {
    show: {
      theme: 'dark',
      icon: 'icon-person',
      position: position.topCenter,
      progressBarColor: 'rgb(0, 255, 184)',
      buttons: [
        [
          '<button>Ok</button>',
          function (instance, toast) {
            alert('Hello world!')
          },
          true
        ],
        [
          '<button>Close</button>',
          function (instance, toast) {
            instance.hide(
              {
                transitionOut: 'fadeOutUp',
                onClosing: function (instance, toast, closedBy) {
                  console.info('closedBy: ' + closedBy)
                }
              },
              toast,
              'buttonName'
            )
          }
        ]
      ],
      onOpening: function (instance, toast) {
        console.info('callback abriu!')
      },
      onClosing: function (instance, toast, closedBy) {
        console.info('closedBy: ' + closedBy)
      }
    },
    ballon: {
      balloon: true,
      position: position.bottomCenter
    },
    info: {
      position: position.bottomLeft
    },
    success: {
      position: position.bottomRight
    },
    warning: {
      position: position.topLeft
    },
    error: {
      position: position.topRight
    },
    question: {
      timeout: 20000,
      close: false,
      overlay: true,
      toastOnce: true,
      id: 'question',
      zindex: 999,
      position: position.center,
      buttons: [
        [
          '<button><b>YES</b></button>',
          function (instance, toast) {
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
          },
          true
        ],
        [
          '<button>NO</button>',
          function (instance, toast) {
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
          }
        ]
      ],
      onClosing: function (instance, toast, closedBy) {
        console.info('Closing | closedBy: ' + closedBy)
      },
      onClosed: function (instance, toast, closedBy) {
        console.info('Closed | closedBy: ' + closedBy)
      }
    }
  }
}

export { notificationSystem, position }
