using System;

class Animais
{

    private string nome;
    private string raca;
    private string genero;
    private string porte;
    private string ongdoadora;
    private string cor;

    //Get das variaveis
    public string GetNome()
    {
        return nome;
    }
    public string GetRaca()
    {
        return raca;
    }
    public string GetGenero()
    {
        return genero;
    }

    public string GetPorte()
    {
        return porte;
    }

    public string GetOngDoadora()
    {
        return ongdoadora;
    }

    public string GetCor()
    {
        return cor;
    }
    //Set das variaveis
    public void SetNome(string novoNome)
    {
        nome = novoNome;
    }
    public void SetRaca(string novaRaca)
    {
        raca = novaRaca;
    }

    public void SetGenero(string novoGenero)
    {
        genero = novoGenero;
    }

    public void SetPorte(string novoPorte)
    {
        porte = novoPorte;
    }
    public void SetOngDoadora(string novoOngDoadora)
    {
        ongdoadora = novoOngDoadora;
    }

    public void SetNovaCor(string novaCor)
    {
        cor = novaCor;
    }
    //Funçõs construtoras da classe Animais
   

    public Animais(string novoNome, string novaRaca, string novoGenero, string novoPorte, string novaongDoadora, string novaCor)
    {
        nome = novoNome;
        raca = novaRaca;
        genero = novoGenero;
        porte = novoPorte;
        ongdoadora = novaongDoadora;
        cor = novaCor;
    }

    public void ExibirInformacoes()
    {
        
       Console.WriteLine($" {nome} {raca} {genero} {porte} {ongdoadora} {cor}");



    }

}
class Usuarios()
{
    private string nome;
    private string sobrenome;
    private int idade;
    private string endereco;
    private float renda;

    public string GetNome()
    {
        return nome;
    }

    public string GetSobrenome()
    {
        return sobrenome;
    }
    public int GetIdade()
    {
        return idade;
    }

    public string SetEndereco()
    {
        return endereco;
    }
    public float GetRenda()
    {
        return renda;
    }

    public void SetNome(string novoNome)
    {
        nome = novoNome;
    }

    public void SetSobrenome(string novoSobrenome)
    {
        sobrenome = novoSobrenome;
    }

    public void SetIdade(int novaIdade)
    {
        idade = novaIdade;
    }

    public void SetEndereco(string novoEndereco)
    {
        endereco = novoEndereco;
    }

    public void SetRenda(float novaRenda)
    {
        renda = novaRenda;
    }
}
