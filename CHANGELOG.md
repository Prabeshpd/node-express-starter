# [1.4.0](https://github.com/Prabeshpd/node-express/compare/node_express@1.3.0...node_express@1.4.0) (2022-12-12)


### Bug Fixes

* change the is_active default value to true ([15aead1](https://github.com/Prabeshpd/node-express/commit/15aead1bf60bdc5cb05657f64c8b6e199152cc99))
* fix the creation of user to return appropriate date ([9beaa99](https://github.com/Prabeshpd/node-express/commit/9beaa9930f36181fe0f7073e1ceb4575d7a010c3))
* fix the joi schema type ([81beeba](https://github.com/Prabeshpd/node-express/commit/81beeba77cb2657b5747ede3db1d454ae5f39e0f))
* skip test in CI ([9c4d599](https://github.com/Prabeshpd/node-express/commit/9c4d5997d2ec9fad241824b3b9c3e2b327a91827))
* take the env variables as the environment ([d6f5c2a](https://github.com/Prabeshpd/node-express/commit/d6f5c2ad1023ae8e72a2a7dd2144071ac1570ce7))


### Features

* add test for the employee ([7d8da5c](https://github.com/Prabeshpd/node-express/commit/7d8da5c67ce61a1c1df8f76948fb89e4bc6b0ef7))
* add the api test for auth ([d51561d](https://github.com/Prabeshpd/node-express/commit/d51561da4347f9d8fd071544568fc2ac4eafbfbe))
* add the api test for user ([b9e94e9](https://github.com/Prabeshpd/node-express/commit/b9e94e91b54826172278cdcc976217d15c1a5c8a))
* separate the environment for test and app ([93163f9](https://github.com/Prabeshpd/node-express/commit/93163f9fce93725dff1c0135907f11a4cf76bbc9))

# [1.3.0](https://github.com/Prabeshpd/node-express/compare/node_express@1.2.0...node_express@1.3.0) (2022-12-12)


### Bug Fixes

* add test for validator ([aa3e4d0](https://github.com/Prabeshpd/node-express/commit/aa3e4d0b4a48b3a61aac03d011dc9c5ae91e3fc4))
* correct test to close the connection ([446c687](https://github.com/Prabeshpd/node-express/commit/446c68738aeebac39856f0f6d2008676067a72af))
* fix user model return type ([9f9a70b](https://github.com/Prabeshpd/node-express/commit/9f9a70b68e5b1ee09fa0608d403197c4bb3cb03d))
* remove unwanted varaibles ([4f9786c](https://github.com/Prabeshpd/node-express/commit/4f9786ce9603bec5c907f0450f309e18391307a0))
* update import of chai-as-promised ([0a1a313](https://github.com/Prabeshpd/node-express/commit/0a1a31323fefc5463b2701fd3f7f527980470fb7))
* update logging details ([91cdcc3](https://github.com/Prabeshpd/node-express/commit/91cdcc31b57cb5aa64c1c5e97c2e9629311ffa27))


### Features

* add connection along with cache to redis database ([ac92422](https://github.com/Prabeshpd/node-express/commit/ac924221667b67e85c4abf07e73b012c3d2778a1))
* make a base class for model and its function ([db4f496](https://github.com/Prabeshpd/node-express/commit/db4f49647bc113dba862195ca4704059d58e8641))

# [1.2.0](https://github.com/Prabeshpd/node-express/compare/node_express@1.1.0...node_express@1.2.0) (2022-12-12)


### Bug Fixes

* correct the path for refresh ([328b84f](https://github.com/Prabeshpd/node-express/commit/328b84f0cefee334be628fa7569b566838b16c8b))


### Features

* add validation for employee and user ([08db9df](https://github.com/Prabeshpd/node-express/commit/08db9df3d7fc8d66bf037171d24a682759a07fc3))
* add validation for login ([b4dcf1c](https://github.com/Prabeshpd/node-express/commit/b4dcf1c33e59849ff4c121a0bfe6a937f59493ad))

# [1.1.0](https://github.com/Prabeshpd/node-express/compare/node_express@1.0.0...node_express@1.1.0) (2022-12-12)


### Bug Fixes

* add name for user in the model ([bb88c10](https://github.com/Prabeshpd/node-express/commit/bb88c107eec7b789b7db856aa31d1ebc591683d2))


### Features

* add employee module to list and create ([eefba9f](https://github.com/Prabeshpd/node-express/commit/eefba9fbe8ac126b53770c1dca8c3de9a75f6143))
* add model for employee ([d2175b8](https://github.com/Prabeshpd/node-express/commit/d2175b8ec95b6033f3213baacdecf282aad865b1))
* add pagination util to maintain pagination ([cfd1b28](https://github.com/Prabeshpd/node-express/commit/cfd1b28a005b03336f7962723121401e4559fd68))

# 1.0.0 (2022-12-11)


### Bug Fixes

* add test command ([53fdf10](https://github.com/Prabeshpd/node-express/commit/53fdf10ce5af671005a4ec6e8b684d7a6fe220be))
* fix name of release package ([582a37d](https://github.com/Prabeshpd/node-express/commit/582a37d2e25346b8f0cc2754ca5e1839f630ecf1))
* update token name for github action ([38debfc](https://github.com/Prabeshpd/node-express/commit/38debfc963ca26cbb90c7421016035da6f5307d7))


### Features

* add authentication middleware ([27f4e75](https://github.com/Prabeshpd/node-express/commit/27f4e75842a5960c5033a9c4fca61c6b97740e39))
* add authentication module using jwt ([904dbb4](https://github.com/Prabeshpd/node-express/commit/904dbb4e4ae7d34684fe54cd72448679e4af81fa))
* add dockerfile ([4d9c262](https://github.com/Prabeshpd/node-express/commit/4d9c2624047224a0191bc033724868fb0622d236))
* add error handler middleware ([d14505a](https://github.com/Prabeshpd/node-express/commit/d14505a4d58b66847d0150cec319b9a3b33d448a))
* add error middleware for application ([f07430b](https://github.com/Prabeshpd/node-express/commit/f07430b02bb3e6ff69cc3ea696c355ec35190b6d))
* add packages for semantic workflow ([249df43](https://github.com/Prabeshpd/node-express/commit/249df43d1c33a27935f8c8b85f9ceecfcdb61b5b))
* add plugin test and setup api test ([930db9c](https://github.com/Prabeshpd/node-express/commit/930db9c5f06d8d283c35312c30fbe3010b3b1a6f))
* add prettify yml file for github actions ([49e7725](https://github.com/Prabeshpd/node-express/commit/49e772598cfc9d73f475c794495a836d1b542961))
* add router to get app info ([f27d1d7](https://github.com/Prabeshpd/node-express/commit/f27d1d749f6779185e12cb136f7ed22d61bb6be1))
* add test for middlewares auth ([2e38502](https://github.com/Prabeshpd/node-express/commit/2e3850291a5701004aee3ec1df10ad706bb909a2))
* add test for utils ([d5e4b70](https://github.com/Prabeshpd/node-express/commit/d5e4b70e94fe4b21d4a93da9f20c1811858678ec))
* add workflow for build check of docker ([2cd67c0](https://github.com/Prabeshpd/node-express/commit/2cd67c01c32e19a2f12d1e6777a03cd9d3dea54a))
* add workflow for build check of the application on PR ([e4f1f51](https://github.com/Prabeshpd/node-express/commit/e4f1f519d4d1c194835fa8f831a0d6dce341180b))
* add workflow for release of the project ([3015819](https://github.com/Prabeshpd/node-express/commit/30158194e68b9dc186f835a59c88f7adc60e6fba))
* initial setup of express ([08e5b91](https://github.com/Prabeshpd/node-express/commit/08e5b9103e52248fcd152bb5ee1adbd6e005bc3c))
* setup of sql database ([023845f](https://github.com/Prabeshpd/node-express/commit/023845f56f13d009c99dfa8e8cdfb5c7532cabba))

# 1.0.0 (2022-12-11)


### Bug Fixes

* add test command ([53fdf10](https://github.com/Prabeshpd/node-express/commit/53fdf10ce5af671005a4ec6e8b684d7a6fe220be))
* update token name for github action ([38debfc](https://github.com/Prabeshpd/node-express/commit/38debfc963ca26cbb90c7421016035da6f5307d7))


### Features

* add authentication middleware ([27f4e75](https://github.com/Prabeshpd/node-express/commit/27f4e75842a5960c5033a9c4fca61c6b97740e39))
* add authentication module using jwt ([904dbb4](https://github.com/Prabeshpd/node-express/commit/904dbb4e4ae7d34684fe54cd72448679e4af81fa))
* add dockerfile ([4d9c262](https://github.com/Prabeshpd/node-express/commit/4d9c2624047224a0191bc033724868fb0622d236))
* add error handler middleware ([d14505a](https://github.com/Prabeshpd/node-express/commit/d14505a4d58b66847d0150cec319b9a3b33d448a))
* add error middleware for application ([f07430b](https://github.com/Prabeshpd/node-express/commit/f07430b02bb3e6ff69cc3ea696c355ec35190b6d))
* add packages for semantic workflow ([249df43](https://github.com/Prabeshpd/node-express/commit/249df43d1c33a27935f8c8b85f9ceecfcdb61b5b))
* add prettify yml file for github actions ([49e7725](https://github.com/Prabeshpd/node-express/commit/49e772598cfc9d73f475c794495a836d1b542961))
* add router to get app info ([f27d1d7](https://github.com/Prabeshpd/node-express/commit/f27d1d749f6779185e12cb136f7ed22d61bb6be1))
* add workflow for build check of docker ([2cd67c0](https://github.com/Prabeshpd/node-express/commit/2cd67c01c32e19a2f12d1e6777a03cd9d3dea54a))
* add workflow for build check of the application on PR ([e4f1f51](https://github.com/Prabeshpd/node-express/commit/e4f1f519d4d1c194835fa8f831a0d6dce341180b))
* add workflow for release of the project ([3015819](https://github.com/Prabeshpd/node-express/commit/30158194e68b9dc186f835a59c88f7adc60e6fba))
* initial setup of express ([08e5b91](https://github.com/Prabeshpd/node-express/commit/08e5b9103e52248fcd152bb5ee1adbd6e005bc3c))
* setup of sql database ([023845f](https://github.com/Prabeshpd/node-express/commit/023845f56f13d009c99dfa8e8cdfb5c7532cabba))
