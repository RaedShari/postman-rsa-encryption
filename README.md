# postman-rsa-encryption
* Since Postman doesn't support RSA encryption yet, I had to download and use:
   - [jsrsasign](https://kjur.github.io/jsrsasign/) The free pure JavaScript cryptographic library.
* Please check If Postman is supporting RSA encryption before using this script:
  - [Feature Request: RSA Encryption](https://github.com/postmanlabs/postman-app-support/issues/1607)

## Getting Started
* Just copy and paste the script to the **Pre-request Script** tab, in your postman request window.
* You have to replace **YOUR-PLAIN-TEXT**, **YOUR-PUBLIC-KEY**, and **YOUR-HEADER-NAME** in the script, with yours.
The public key should start with: *-----BEGIN PUBLIC KEY-----* 

## Acknowledgments

* Inspired by:
  - [PostmanRsaSupport](https://github.com/morrisond91/PostmanRsaSupport)
