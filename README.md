 ~~the twotone.io site builds from published posts pushed by foresty.io CMS~~

## UPDATE: 22 July 2024

Forestry.io no longer exists. Porting to Tina. 
Whilst still a jekyll site...

### Dev setup (Node >= 18, Ruby >= 3.2)

Use Node 18 (there is a `.nvmrc` in this repo):

```bash
nvm use
npm install
bundle install
npm run dev
```

This runs:

```bash
tinacms dev -c "bundle exec jekyll serve"
```

If `bundle install` tries to use system Ruby (2.6), install and initialize rbenv:

```bash
brew install rbenv ruby-build
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
source ~/.zshrc
rbenv install 3.2.2
rbenv local 3.2.2
bundle update
bundle install
```

Ruby might be broken... things to try
```bundle update --bundler```

```eval "$(rbenv init -)"```

``` source ~/.bash_profile ```

then try the command again

at this point admin will hopefully be 
```http://localhost:4000/admin/index.html```
and site
```http://127.0.0.1:4000```

## More info
```https://tina.io/docs/frameworks/jekyll/```
