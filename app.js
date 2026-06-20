const h = React.createElement;
const Fragment = React.Fragment;
const useMemo = React.useMemo;
const useState = React.useState;

const products = [
  {
    id: 1,
    name: "Notebook Aurora 14",
    category: "Computadores",
    price: "R$ 4.299",
    description: "Ideal para estudos e produtividade, com desempenho rápido e bateria de longa duração.",
    badge: "Mais vendido",
  },
  {
    id: 2,
    name: "Headset Pulse Pro",
    category: "Acessórios",
    price: "R$ 389",
    description: "Som imersivo, microfone com redução de ruído e conforto para uso prolongado.",
    badge: "Oferta do dia",
  },
  {
    id: 3,
    name: "Smartwatch Vita 2",
    category: "Wearables",
    price: "R$ 799",
    description: "Monitore saúde, passos, sono e notificações em um design leve e elegante.",
    badge: "Novo lançamento",
  },
  {
    id: 4,
    name: "Teclado Mecânico NovaKey",
    category: "Acessórios",
    price: "R$ 549",
    description: "Resposta tátil precisa para quem busca mais conforto e performance ao digitar.",
    badge: "Alta avaliação",
  },
  {
    id: 5,
    name: "Monitor UltraView 27",
    category: "Computadores",
    price: "R$ 1.899",
    description: "Tela ampla com cores vivas para trabalhar, estudar e consumir conteúdo com qualidade.",
    badge: "Tela ampla",
  },
  {
    id: 6,
    name: "Caixa de Som Orbit",
    category: "Áudio",
    price: "R$ 279",
    description: "Áudio potente para música, vídeos e reuniões com conexão simples e rápida.",
    badge: "Favorito",
  },
];

const categories = ["Todos"].concat(Array.from(new Set(products.map(function (product) {
  return product.category;
}))));

function App() {
  const stateQuery = useState("");
  const query = stateQuery[0];
  const setQuery = stateQuery[1];
  const stateCategory = useState("Todos");
  const activeCategory = stateCategory[0];
  const setActiveCategory = stateCategory[1];

  const filteredProducts = useMemo(function () {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter(function (product) {
      const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return h(
    "div",
    { className: "page-shell" },
    h(
      "header",
      { className: "container" },
      h(
        "div",
        { className: "topbar" },
        h(
          "div",
          { className: "brand", "aria-label": "TechNova Store" },
          h("div", { className: "brand-mark" }, "TN"),
          h(
            "div",
            null,
            h("h1", null, "TechNova Store"),
            h("p", null, "Loja online com foco em tecnologia e produtividade")
          )
        ),
        h(
          "nav",
          null,
          h("a", { href: "#sobre" }, "Sobre"),
          h("a", { href: "#produtos" }, "Produtos")
        )
      )
    ),
    h(
      "main",
      null,
      h(
        "section",
        { className: "container hero", id: "inicio" },
        h(
          "div",
          { className: "hero-panel hero-copy" },
          h("span", { className: "eyebrow" }, "HTML + CSS + JavaScript + React"),
          h("h2", null, "Uma vitrine moderna para demonstrar um site completo e interativo."),
          h(
            "p",
            null,
            "Este projeto foi desenvolvido para apresentar uma estrutura organizada de website, com layout visual, seção institucional e catálogo de produtos com busca em tempo real usando React."
          ),
          h(
            "div",
            { className: "hero-actions" },
            h("a", { className: "button button-primary", href: "#produtos" }, "Ver produtos"),
            h("a", { className: "button button-secondary", href: "#sobre" }, "Saiba mais")
          )
        ),
        h(
          "aside",
          { className: "hero-panel hero-stats", "aria-label": "Destaques do projeto" },
          h(
            "div",
            { className: "stat-card" },
            h("strong", null, "6"),
            h("span", null, "produtos organizados por categoria")
          ),
          h(
            "div",
            { className: "stat-card" },
            h("strong", null, "1"),
            h("span", null, "filtro em tempo real com React")
          ),
          h(
            "div",
            { className: "stat-card" },
            h("strong", null, "100%"),
            h("span", null, "layout responsivo e funcional")
          )
        )
      ),
      h(
        "section",
        { className: "container section", id: "sobre" },
        h(
          "div",
          { className: "section-card" },
          h(
            "div",
            { className: "section-head" },
            h(
              "div",
              null,
              h("h3", null, "Sobre o projeto"),
              h("p", null, "Uma breve apresentação da proposta desenvolvida.")
            )
          ),
          h(
            "div",
            { className: "about-grid" },
            h(
              "article",
              { className: "about-text" },
              h(
                "p",
                null,
                "A TechNova Store foi criada como um exemplo simples de integração entre HTML, CSS, JavaScript e React. O objetivo foi montar uma página de loja com aparência profissional e uma funcionalidade interativa que realmente mostrasse o uso do React na prática."
              ),
              h(
                "ul",
                { className: "about-list" },
                h("li", null, "Estrutura visual organizada com cabeçalho, banner, sobre e catálogo."),
                h("li", null, "Estilo moderno com cards, gradientes e boa leitura em telas diferentes."),
                h("li", null, "Busca e filtro de produtos em tempo real para demonstrar interatividade.")
              )
            ),
            h(
              "aside",
              { className: "about-side" },
              h(
                "div",
                { className: "highlight" },
                h("strong", null, "Objetivo pedagógico"),
                h(
                  "span",
                  null,
                  "Mostrar, de forma prática, como os conteúdos da disciplina podem ser unidos em um único site funcional."
                )
              ),
              h(
                "div",
                { className: "highlight" },
                h("strong", null, "Resultado"),
                h(
                  "span",
                  null,
                  "Uma página única pronta para apresentação, com layout limpo e navegação simples."
                )
              )
            )
          )
        )
      ),
      h(
        "section",
        { className: "container section", id: "produtos" },
        h(
          "div",
          { className: "section-card" },
          h(
            "div",
            { className: "section-head" },
            h(
              "div",
              null,
              h("h3", null, "Catálogo de produtos"),
              h("p", null, "Use a busca para filtrar em tempo real e explorar o funcionamento do React.")
            )
          ),
          h(
            "div",
            { className: "catalog-toolbar" },
            h(
              "label",
              { className: "search-box", "aria-label": "Buscar produtos" },
              h("span", null, "⌕"),
              h("input", {
                type: "text",
                value: query,
                onChange: function (event) { return setQuery(event.target.value); },
                placeholder: "Buscar por produto, categoria ou descrição",
              })
            ),
            h(
              "div",
              { className: "chip-list", role: "tablist", "aria-label": "Categorias de produtos" },
              categories.map(function (category) {
                return h(
                  "button",
                  {
                    key: category,
                    className: "chip " + (activeCategory === category ? "is-active" : ""),
                    onClick: function () { return setActiveCategory(category); },
                    type: "button",
                  },
                  category
                );
              })
            )
          ),
          h(
            "div",
            { className: "product-grid" },
            filteredProducts.length > 0
              ? filteredProducts.map(function (product) {
                  return h(
                    "article",
                    { className: "product-card", key: product.id },
                    h("div", { className: "product-visual" }, h("span", null, product.badge)),
                    h("div", { className: "tag" }, product.category),
                    h(
                      "div",
                      { className: "product-meta" },
                      h("h4", null, product.name),
                      h("span", { className: "price" }, product.price)
                    ),
                    h("p", null, product.description)
                  );
                })
              : h(
                  "div",
                  { className: "empty-state" },
                  'Nenhum produto encontrado para a busca atual. Tente outro termo ou volte para a opção "Todos".'
                )
          )
        )
      ),
    ),
    h(
      "footer",
      { className: "footer" },
      h(
        "div",
        { className: "container footer-card" },
        h("strong", null, "TechNova Store"),
        h("p", null, "Projeto acadêmico simples, organizado e pronto para apresentação em vídeo.")
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));