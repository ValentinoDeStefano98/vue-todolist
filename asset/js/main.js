//Carico l'istanza di Vue
var app = new Vue(
    {
        el: '#root',
        data:{
            tasks: [
                {               
                text: 'Fare la spesa',
                done: false
                },
                {               
                text: 'Portare a spasso il cane',
                done: false
                },
                {               
                text: 'Preparare una torta',
                done: false
                },
                {               
                text: 'Chiamare Anna',
                done: false
                },
                {               
                text: 'Comprare regalo',
                done: false
                },
            ]
            
        },
        methods: {
            //Funzione per rimuovere il task al click della x
            removeTask: function(taskIndex){
                this.tasks.splice(taskIndex, 1);
            }
        }
    }
);