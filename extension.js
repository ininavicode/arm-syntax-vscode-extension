const vscode = require('vscode');

function activate(context) {
  const updateColors = () => {
    const colorsConfig = vscode.workspace.getConfiguration('armSyntax.colors');
    const boldConfig = vscode.workspace.getConfiguration('armSyntax.bold');
    const italicConfig = vscode.workspace.getConfiguration('armSyntax.italic');
    const editorConfig = vscode.workspace.getConfiguration('editor');

    const createFontStyle = (bold, italic) => {
      let styles = [];
      if (bold) styles.push("bold");
      if (italic) styles.push("italic");
      return styles.join(" ");
    };

    const tokenColorCustomizations = {
      textMateRules: [
        {
          scope: "keyword.mnemonic.arm",
          settings: {
            foreground: colorsConfig.get('mnemonics', '#3E69E2'),
            fontStyle: createFontStyle(
              boldConfig.get('mnemonics', true),
              italicConfig.get('mnemonics', false)
            )
          }
        },
        {
          scope: "comment.line.arm",
          settings: {
            foreground: colorsConfig.get('comments', '#7EC699'),
            fontStyle: createFontStyle(
              boldConfig.get('comments', false),
              italicConfig.get('comments', true)
            )
          }
        },
        {
          scope: "variable.register.arm",
          settings: {
            foreground: colorsConfig.get('registers', '#3E69E2'),
            fontStyle: createFontStyle(
              boldConfig.get('registers', false),
              italicConfig.get('registers', false)
            )
          }
        },
        {
          scope: "constant.numeric.arm",
          settings: {
            foreground: colorsConfig.get('constants', '#D34AD8'),
            fontStyle: createFontStyle(
              boldConfig.get('constants', false),
              italicConfig.get('constants', false)
            )
          }
        },
        {
          scope: "entity.name.label.arm",
          settings: {
            foreground: colorsConfig.get('labels', '#ECB827'),
            fontStyle: createFontStyle(
              boldConfig.get('labels', false),
              italicConfig.get('labels', false)
            )
          }
        },
        {
          scope: "support.directive.arm",
          settings: {
            foreground: colorsConfig.get('directives', '#FD4444'),
            fontStyle: createFontStyle(
              boldConfig.get('directives', false),
              italicConfig.get('directives', false)
            )
          }
        },
        {
          scope: "displacement_op2.arm",
          settings: {
            foreground: colorsConfig.get('displacements', '#E8F348'),
            fontStyle: createFontStyle(
              boldConfig.get('displacements', false),
              italicConfig.get('displacements', false)
            )
          }
        }
      ]
    };

    editorConfig.update(
      'tokenColorCustomizations',
      tokenColorCustomizations,
      vscode.ConfigurationTarget.Workspace
    );
  };

  // Update colors when the extension activates
  updateColors();

  // Listen for configuration changes
  const disposable = vscode.workspace.onDidChangeConfiguration((event) => {
    if (
      event.affectsConfiguration('armSyntax.colors') ||
      event.affectsConfiguration('armSyntax.bold') ||
      event.affectsConfiguration('armSyntax.italic')
    ) {
      updateColors();
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
