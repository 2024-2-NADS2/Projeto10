using System.Runtime.ConstrainedExecution;

using System;

class Gato : Animais
{
    private string descricao;

    public string GetDescricao() // Removido acento
    {
        return descricao;
    }

    public void SetDescricao(string novaDescricao)
    {
        descricao = novaDescricao;
    }

    public void MostrarInformacoes()
    {
        // Usando o método correto
        Console.WriteLine("Descrição: {0}", GetDescricao());
    }

    // Construtor
    public Gato(string nome, string raca, string genero, string porte, string ongdoadora, string cor, string novaDescricao)
       : base(nome, raca, genero, porte, ongdoadora, cor)
    {
        descricao = novaDescricao;
    }


}
