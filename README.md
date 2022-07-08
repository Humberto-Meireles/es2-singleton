# es2-singleton
* Trabalho desenvolvido para a unidade curricular de Engenharia de Software II - Faculdade Senac Pelotas
* Video: https://drive.google.com/file/d/1vZ5scsJJKuv7juPcw3HQ46W2ArLeZzjJ/view?usp=sharing 

# Design Patterns
Os padrões de projeto podem ser classificados em três grupos principais:
 
 * Padrões criacionais: fornecem mecanismos de criação de objetos que aumentam a flexibilidade e a reutilização de código.
 
 * Padrões estruturais: explicam como montar objetos e classes em estruturas maiores, enquanto ainda mantém as estruturas flexíveis e eficientes.
 
 * Padrões comportamentais: cuidam da comunicação eficiente e da assinalação de responsabilidades entre objetos.
 
Esse trabalho abordou o padrão de projeto criacional Singleton, através do desenvolvimento de um código para um Logger, o qual simula o processamento de um pagamento e o seu respectivo log.

Primeiramente foi desenvolvida a aplicação sem o padrão Singleton e depois o código foi refatorado seguindo o design pattern mencionado. 


# Singleton

O Singleton é um padrão de projeto criacional que garante que uma classe tenha apenas uma instância, enquanto provê um ponto de acesso global para essa instância.

# Pontos Fortes
* Garante que uma classe só terá uma única instância.
* Provê um ponto de acesso global para aquela instância
* O objeto singleton é inicializado somente quando for pedido pela primeira vez.

# Pontos Fracos
* Viola o princípio de responsabilidade única. O padrão resolve dois problemas de uma só vez.
* O padrão Singleton pode mascarar um design ruim, por exemplo, quando os componentes do programa sabem muito sobre cada um.
* O padrão requer tratamento especial em um ambiente multithreaded para que múltiplas threads não possam criar um objeto singleton várias vezes.
* Pode ser difícil realizar testes unitários do código cliente do Singleton porque muitos frameworks de teste dependem de herança quando produzem objetos simulados. Já que o construtor da classe singleton é privado e sobrescrever métodos estáticos é impossível na maioria das linguagem, você terá que pensar em uma maneira criativa de simular o singleton. Ou apenas não escreva os testes. Ou não use o padrão Singleton.


# Referências
* Refactoring Guru: https://refactoring.guru/pt-br/design-patterns
* Eric Freeman, Elisabeth Robson, Kathy Sierra, and Bert Bates - Head First Design Patterns, 2nd Edition - O’Reilly Media, 2021, p.169-190
* Web Dev Simplified - Singleton Pattern - Design Patterns: https://www.youtube.com/watch?v=sJ-c3BA-Ypo
