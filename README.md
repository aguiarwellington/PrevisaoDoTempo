
# Previsão do Tempo

Este é um projeto simples de previsão do tempo utilizando **Vite** para construção, **Axios** para requisições HTTP, e a **API da OpenWeather** para obter as condições climáticas.

## Tecnologias Utilizadas

- **Vite**: Framework moderno para desenvolvimento rápido de aplicações web.
- **Axios**: Biblioteca de requisições HTTP baseada em Promises, usada para se comunicar com a API da OpenWeather.
- **API da OpenWeather**: Serviço que fornece informações sobre o clima em tempo real.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/usuario/repository.git
   cd nome-do-repositorio
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Adicione sua chave da API da OpenWeather no arquivo `.env`:

   ```bash
   VITE_OPENWEATHER_API_KEY=Sua_Chave_Aqui
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse a aplicação em `http://localhost:3000` no seu navegador.

## Como Funciona

Este projeto consome a API da OpenWeather para fornecer informações meteorológicas. O usuário pode consultar a previsão para os próximos 5 dias, com detalhes como temperatura, sensação térmica, umidade e descrição do tempo.

### Funcionalidades

- Exibe a temperatura atual.
- Mostra a previsão para os próximos 5 dias.
- Dados atualizados em tempo real a partir da API da OpenWeather.

## Como Usar

1. Abra a aplicação.
2. Digite o nome de uma cidade e clique em "Buscar" para ver a previsão do tempo.
3. A previsão para a cidade será exibida, incluindo detalhes de temperatura, condição climática e outras informações relevantes.

## Contribuindo

Sinta-se à vontade para contribuir com melhorias! Siga os passos abaixo para contribuir:

1. Faça um fork deste repositório.
2. Crie uma branch para a sua alteração (`git checkout -b nova-alteracao`).
3. Faça o commit das suas alterações (`git commit -am 'Adicionando nova funcionalidade'`).
4. Envie para o repositório original (`git push origin nova-alteracao`).
5. Abra um pull request para revisão.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

 
 
