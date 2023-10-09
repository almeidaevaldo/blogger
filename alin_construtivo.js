const helpText = {
  prestructural: "Neste nível, o aluno não possui conhecimento sobre o tema. Ele pode usar verbos como 'identificar', 'descrever' e 'listar'.",
  unistructural: "Neste nível, o aluno tem um conhecimento básico sobre o tema. Verbos como 'definir', 'citar' e 'reconhecer' são adequados.",
  multistructural: "Neste nível, o aluno possui conhecimento sobre diferentes aspectos do tema. Verbos como 'comparar', 'classificar' e 'discriminar' são apropriados.",
  relational: "Neste nível, o aluno consegue fazer relações entre os elementos do tema. Verbos como 'analisar', 'relacionar' e 'diferenciar' são indicados.",
  extendedabstract: "Neste nível, o aluno consegue criar, avaliar e sintetizar informações. Verbos como 'criar', 'avaliar' e 'desenvolver' são recomendados."
};

const selectElement = document.getElementById('soloLevel');
const helpDivElement = document.getElementById('helpText');

selectElement.addEventListener('change', (event) => {
  const selectedLevel = event.target.value;
  helpDivElement.innerHTML = helpText[selectedLevel];
});
