const shellwords = require("shellwords");

const commandFirstLine = `$ vault

Usage: vault <command> [args]

Common commands:
    read        Read data and retrieves secrets
    write       Write data, configuration, and secrets
    delete      Delete secrets and configuration
    list        List data or secrets
    login       Authenticate locally
    server      Start a Vault server
    status      Print seal and HA status
    unwrap      Unwrap a wrapped secret

Other commands:
    audit          Interact with audit devices
    auth           Interact with auth methods
    lease          Interact with leases
    operator       Perform operator-specific tasks
    path-help      Retrieve API help for paths
    policy         Interact with policies
    secrets        Interact with secrets engines
    ssh            Initiate an SSH session
    token          Interact with tokens`;

const envDollarSign = `$ exec $SHELL`;

const multiLineMultiCommand = `$ unzip vault_\${VAULT_VERSION}_linux_amd64.zip
$ sudo chown root:root vault
$ sudo mv vault /usr/local/bin/
$ vault --version`;

const multiLineCommand = `$ vault write identity/entity-alias name="bob" \\
canonical_id=<entity_id> \\
mount_accessor=<userpass_accessor>`;

const variants = [
  commandFirstLine,
  multiLineCommand,
  multiLineMultiCommand,
  envDollarSign
];

console.log(
  variants.map(cmd => shellwords.escape(cmd)).map(cmd => shellwords.split(cmd))
);

console.log(variants[1].replace("$ ", ""));
