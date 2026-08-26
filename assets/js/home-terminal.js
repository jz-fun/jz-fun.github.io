(function () {
  "use strict";

  var form = document.getElementById("terminal-form");
  var input = document.getElementById("terminal-input");
  var response = document.getElementById("terminal-response");

  if (!form || !input || !response) return;

  var history = [];
  var historyIndex = 0;

  var commands = {
    help: {
      output: "available: <strong>about</strong> · <strong>research</strong> · <strong>papers</strong> · <strong>latest</strong> · <strong>news</strong> · <strong>contact</strong> · <strong>clear</strong>"
    },
    about: {
      output: "Zhuo Sun — tenure-track Assistant Professor at SUFE.<br>Visiting Researcher at Imperial College London.<br>Ph.D. UCL · M.Sc. Oxford · Area Chair / PC across major ML venues."
    },
    research: {
      output: "opening <strong>research graph</strong>…<br>focus: modern AI algorithms × theoretical ML foundations",
      target: "#research-topics"
    },
    papers: {
      output: "opening <strong>preprints and publications</strong>…",
      target: "#preprints--working-papers"
    },
    publications: {
      output: "opening <strong>publications</strong>…",
      target: "#publications-"
    },
    latest: {
      output: "latest: <strong>SR-OPSD: Self-Referenced On-Policy Self-Distillation</strong> · <a href=\"https://arxiv.org/pdf/2608.09745\" target=\"_blank\" rel=\"noopener\">arXiv:2608.09745</a>",
      target: "#preprints--working-papers"
    },
    news: {
      output: "streaming the latest research updates…",
      target: "#news"
    },
    contact: {
      output: "email: <a href=\"mailto:zhuosunreid@outlook.com\">zhuosunreid@outlook.com</a>"
    }
  };

  function normalize(value) {
    return value.trim().toLowerCase().replace(/^\.\//, "").split(/\s+/)[0];
  }

  function printCommand(rawValue) {
    var command = normalize(rawValue);

    if (!command) return;

    history.push(rawValue.trim());
    historyIndex = history.length;

    if (command === "clear") {
      response.classList.remove("terminal-error");
      response.innerHTML = '<span class="terminal-muted">screen cleared. type <strong>help</strong> to continue.</span>';
      return;
    }

    var result = commands[command];

    if (!result) {
      response.textContent = "command not found: " + command + ". type help.";
      response.classList.add("terminal-error");
      return;
    }

    response.classList.remove("terminal-error");
    response.innerHTML = "<p><span class=\"terminal-prompt\">$ " + command + "</span><br>" + result.output + "</p>";

    if (result.target) {
      window.setTimeout(function () {
        var target = document.querySelector(result.target);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 220);
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    printCommand(input.value);
    input.value = "";
    input.focus();
  });

  document.querySelectorAll("[data-terminal-command]").forEach(function (button) {
    button.addEventListener("click", function () {
      var command = button.getAttribute("data-terminal-command");
      input.value = command;
      printCommand(command);
      input.value = "";
    });
  });

  input.addEventListener("keydown", function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "l") {
      event.preventDefault();
      printCommand("clear");
      return;
    }

    if (event.key === "ArrowUp" && history.length) {
      event.preventDefault();
      historyIndex = Math.max(0, historyIndex - 1);
      input.value = history[historyIndex];
    }

    if (event.key === "ArrowDown" && history.length) {
      event.preventDefault();
      historyIndex = Math.min(history.length, historyIndex + 1);
      input.value = history[historyIndex] || "";
    }
  });
})();
