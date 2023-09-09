// Referenciar o elemento input e o parágrafo onde você deseja exibir o resultado
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const mensagem = document.getElementById("message");
const numero = document.getElementById("number");
const comando = document.getElementById("command");
//Colocar mecanismo para converter entre sistema métrico e imperial

    let num_height;
    let num_weight;
    let system; 

    calculaBMI(num_height, num_weight);
    // Adicionar um ouvinte de evento para o evento 'input'
    weight.addEventListener("input", function() {
      // Obter o valor atual do input
      const numeroDigitado = weight.value;

      // Converter o valor para um número (opcional)
      num_weight = parseFloat(numeroDigitado);
      calculaBMI(num_height, num_weight)
      
    });

    document.addEventListener("DOMContentLoaded", function() {
        // Selecionar os elementos de input radio
        const radioButtons = document.querySelectorAll('input[name="dist"]');
      
        // Adicionar um ouvinte de evento "change" a cada botão de rádio
        radioButtons.forEach(function(button) {
          button.addEventListener("change", function() {
            // Verificar qual opção foi selecionada
            if (button.checked) 
            {
              system = button.value;
              calculaBMI(num_height, num_weight)
            }
          });
        });
      });
      

    height.addEventListener("input", function() {
        // Obter o valor atual do input
        const numeroDigitado = height.value;
    
        // Converter o valor para um número (opcional)
        num_height = parseFloat(numeroDigitado);
    
        calculaBMI(num_height, num_weight)
        
      });
    
    function calculaBMI(num_height, num_weight)
    {
        
        if(!isNaN(num_weight) && !isNaN(num_height) && num_height != 0)
        {
            if(system == "imperial")
            {
                num_height *= 0.3048;
                num_weight *= 0.453592
            }
            let bmi = num_weight / num_height**2
            numero.textContent = bmi.toFixed(2);
            comando.textContent = "Your BMI is...";

            if(bmi <= 18.4)
            {
                mensagem.textContent = "You are underweight";
            }
            else if(bmi < 25)
            {
                mensagem.textContent = "Your weight is OK";
            }
            else if(bmi < 40)
            {
                mensagem.textContent = "You are overweight";
            }
            else
            {
                mensagem.textContent = "You are obese"
            }

        }
        if(isNaN(num_weight) || num_weight == 0 || isNaN(num_height) || num_height == 0)
        {
            comando.textContent = "Enter your weight and height";
            numero.textContent = "0";
            mensagem.textContent = "";
        }
    }

    