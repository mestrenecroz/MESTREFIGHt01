 document.addEventListener("DOMContentLoaded", () => {
            const themeToggle = document.getElementById("dark-mode");
            themeToggle.addEventListener("change", () => {
                document.body.classList.toggle("dark-theme");
            });
        });
        document.addEventListener("DOMContentLoaded", function () {
            const searchInput = document.getElementById("search-input");
            const searchBtn = document.getElementById("search-btn");
            const suggestionsList = document.getElementById("search-suggestions");
        
            // Lista de sugestões (pode ser adaptada para busca real)
            const suggestions = ["UFC", "MMA", "Boxe", "Jiu-Jitsu", "Anderson Silva", "Jon Jones", "Conor McGregor"];
        
            // Mostrar sugestões ao digitar
            searchInput.addEventListener("input", function () {
                const query = searchInput.value.toLowerCase();
                suggestionsList.innerHTML = "";
        
                if (query) {
                    const filteredSuggestions = suggestions.filter(item =>
                        item.toLowerCase().includes(query)
                    );
        
                    filteredSuggestions.forEach(suggestion => {
                        const li = document.createElement("li");
                        li.textContent = suggestion;
                        li.addEventListener("click", function () {
                            searchInput.value = suggestion;
                            suggestionsList.style.display = "none";
                        });
                        suggestionsList.appendChild(li);
                    });
        
                    suggestionsList.style.display = filteredSuggestions.length ? "block" : "none";
                } else {
                    suggestionsList.style.display = "none";
                }
            });
        
            // Ocultar sugestões ao clicar fora
            document.addEventListener("click", function (e) {
                if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
                    suggestionsList.style.display = "none";
                }
            });
        
            // Ação ao clicar na lupa
            searchBtn.addEventListener("click", function () {
                alert("Buscando por: " + searchInput.value);
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
            const toggleSwitch = document.getElementById("dark-mode");
        
            // Verifica se o usuário já tem um tema salvo no localStorage
            if (localStorage.getItem("darkMode") === "enabled") {
                document.body.classList.add("dark-mode"); // Aplica o tema escuro
                toggleSwitch.checked = true; // Mantém o botão ativado
            }
        
            // Adiciona um evento para detectar mudanças no botão
            toggleSwitch.addEventListener("change", function () {
                if (this.checked) { // Se o botão for ativado
                    document.body.classList.add("dark-mode"); // Adiciona a classe para ativar o modo escuro
                    localStorage.setItem("darkMode", "enabled"); // Salva a preferência do usuário
                } else { // Se o botão for desativado
                    document.body.classList.remove("dark-mode"); // Remove a classe para voltar ao modo claro
                    localStorage.setItem("darkMode", "disabled"); // Salva a preferência do usuário
                }
            });
        });
        
        
  
