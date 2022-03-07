# ![AlgoSigner](media/algosigner-wallet-banner-3.png)

An open-source, security audited, Algorand wallet browser extension that lets users approve and sign transactions that are generated by Algorand dApp applications — available for Chrome.

## Chrome Extension Store

The extension is available on the [Chrome Extension Store](https://chrome.google.com/webstore/detail/algosigner/kmmolakhbgdlpkjkcjkebenjheonagdm)

_This is the preferred solution for end-users, updates will be automatically installed after review by the extension store_

Developers working with dApps may also install directly from the release package, or by downloading the project and building it.

# `AlgoSigner.sign()` and `AlgoSigner.signMultisig()` will be deprecated mid April.

## As of release 1.7.0, AlgoSigner no longer supports incomplete atomic groups signing.
## 1.8.0 Release

### Functionality updates
This update is focused around rekey and changes to accomidate it. Both normal accounts and new reference accounts can be used directly in the UI and used by dApps if the proper authAddr is provided in the transaction. 
- Rekeying transactions now available
- Transactions with rekeyed accounts now accepted 
- Reference accounts can now be imported with public key only 

## New Users

- Watch [Getting Started with AlgoSigner](https://youtu.be/tG-xzG8r770)
- [Ledger Readme](docs/ledger.md)

## Adding Custom Networks

AlgoSigner users may add their own networks to the extension, for example BetaNet or the sandbox private network - [Instructions](docs/add-network.md)

## dApp Developers

For teams looking to integrate AlgoSigner into a project:

Developing with v2 Transaction Signing

- [dApp development guide](docs/dApp-guide.md)
- [v2 AlgoSigner methods](docs/dApp-integration.md)

Legacy v1 Transaction Signing is going to be deprecated soon and is available only for reference purposes.
Please use v2 when developing new apps and migrate existing apps that are still using v1 to v2 as soon as possible.

- [v1 Guide](docs/legacy-signing.md)
- [v1 AlgoSigner methods](docs/legacy-dApp-integration.md)

## Roadmap

- UI improvements
- Contribution guidelines

### AlgoSigner development

For developers interested in working with AlgoSigner [Extension Guide](docs/extension-developers.md). A contribution guide is in development.

## License

This project is under the MIT License
