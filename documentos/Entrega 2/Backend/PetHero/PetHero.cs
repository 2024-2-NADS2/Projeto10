using System;
using System.Runtime.ConstrainedExecution;

class PetHero
{
    public static void Main (string[] args){

            //Exibindo informações da classe Animais
            /*Animais Dog1 = new Animais("Pedrinho", "Shuaoua", "Macho", "Grande Porte", "FECAP", "Caramelo");
           Dog1.ExibirInformacoes();*/


        Gato Gato1 = new Gato("Alfredo", "Siamês", "Macho", "Pequeno", "FECAP", "Cinza",
            "Era uma vez um gatinho chamado Nino, que tinha pelagem macia como nuvens e olhos que brilhavam como estrelas. Seu ronronar era uma música suave que aquecia o coração de todos ao seu redor. Nino adorava se espreguiçar ao sol, esticando suas patinhas delicadas e mostrando a barriguinha peluda, um convite irresistível para carinhos. Sempre curioso, ele explorava cada canto da casa, com suas orelhas em pé e um olhar travesso, pronto para novas aventuras. Quando chegava a hora de dormir, ele se aconchegava no colo de quem mais amava, criando uma bolha de calor e amor. Com Nino, cada dia era uma nova história de fofura e alegria!");

        Gato1.ExibirInformacoes();
        Gato1.MostrarInformacoes();
		}
	}

