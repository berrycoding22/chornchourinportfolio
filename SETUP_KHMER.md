# បើក Portfolio ក្នុង VS Code → GitHub → Vercel

## ១. ត្រៀម

ដំឡើង VS Code និង Git for Windows ពីគេហទំព័រផ្លូវការ៖

- https://code.visualstudio.com/
- https://git-scm.com/downloads/win

អ្នកត្រូវមានគណនី GitHub និង Vercel។ Source នេះជា HTML/CSS/JavaScript មិនត្រូវការ Next.js, Supabase ឬ npm install ទេ។

## ២. បើក និងមើល website

1. Extract ZIP ទៅជា folder `chorn-chourin-portfolio`។
2. ក្នុង VS Code ជ្រើស File → Open Folder ហើយបើក folder ដែលមាន `public` និង `vercel.json`។
3. នៅ Extensions ស្វែងរក Live Server របស់ Ritwick Dey ហើយ Install។
4. ចុចស្ដាំលើ `public/index.html` → Open with Live Server។
5. រក្សាទុកការកែដោយ Ctrl+S។ Browser នឹង reload តាម Live Server។

ឬប្រើ Python បើបានដំឡើងរួច៖

```sh
python -m http.server 5500 --directory public
```

បើក http://localhost:5500 ។ កុំប្រើការបើក file ដោយផ្ទាល់សម្រាប់ពិនិត្យ Clipboard និង interactions។

## ៣. កន្លែងកែ

| ឯកសារ | កែអ្វី |
|---|---|
| public/index.html | ឈ្មោះ, About, ជំនាញ, Projects, Services និង social links |
| public/styles.css | ពណ៌ក្រហម, ទំហំអក្សរ, layout និង responsive |
| public/main.js | ឆ្នូតជំនាញ និងការប្ដូរជំនាញ, menu, scroll reveals |
| public/interactions.js | ភាគល្អិត 3D, horizontal projects, skills ticker |
| public/about-motion.js | About text animation, marquee តាម scroll, hover light និង Contact |
| public/images/chorn-chourin.png | រូប Profile |

## ៤. បង្កើត GitHub repository

1. ចូល https://github.com/new ។
2. Owner: `berrycoding22`។
3. Repository name: `chorn-chourin-portfolio`។
4. ជ្រើស Public ឬ Private តាមចិត្ត។
5. សម្រាប់ repository ថ្មីនេះ កុំបន្ថែម README, .gitignore ឬ License នៅ GitHub ព្រោះ source មានឯកសាររួច។
6. ចុច Create repository។

បើ repository ឈ្មោះនេះមានស្រាប់ ហើយមាន source ចាស់ សូមប្រើឈ្មោះថ្មី ឬ clone repository ចាស់ហើយបញ្ចូលឯកសារតាម workflow របស់វា។ កុំប្រើ force push ដើម្បីជំនួសការងារចាស់។

## ៥. Push ពី VS Code

ក្នុង VS Code → Terminal → New Terminal។ ត្រូវឈរនៅ folder ដែលមាន `vercel.json`។

```sh
git init -b main
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/berrycoding22/chorn-chourin-portfolio.git
git push -u origin main
```

URL ខាងលើត្រឹមត្រូវ ប្រសិនបើអ្នកបានបង្កើត repository ជាមួយ owner និងឈ្មោះក្នុងជំហាន ៤។ បើប្រើឈ្មោះផ្សេង សូមចម្លង URL ពិតពី repository របស់អ្នក។

បើ Git សួរ identity សូមកំណត់ឈ្មោះ និង email ដែលអ្នកប្រើសម្រាប់ Git commits៖

```sh
git config --global user.name "CHORN CHOURIN"
git config --global user.email "YOUR_GIT_EMAIL"
```

ជំនួស YOUR_GIT_EMAIL មុនប្រើ។ អាចប្រើ no-reply email ដែលបង្ហាញក្នុង GitHub Settings → Emails។ បន្ទាប់មករត់ commit និង push ម្ដងទៀត។

បើសួរ Sign in សូមបំពេញ GitHub sign-in ក្នុង browser/Git Credential Manager។ Password គណនី GitHub មិនប្រើជំនួស token សម្រាប់ HTTPS Git ទេ។

## ៦. Deploy ទៅ Vercel

1. ចូល https://vercel.com/new ហើយភ្ជាប់ GitHub របស់អ្នក។
2. Import repository `chorn-chourin-portfolio`។
3. ពិនិត្យ settings៖

| Setting | តម្លៃ |
|---|---|
| Framework Preset | Other |
| Root Directory | ./ (root របស់ repository) |
| Build Command | ទទេ; override ជាទទេ បើ UI ទាមទារ |
| Install Command | ទទេ |
| Output Directory | public |
| Environment Variables | មិនចាំបាច់សម្រាប់កំណែ static នេះ |

ឯកសារ `vercel.json` បានកំណត់ build/install ទទេ និង output `public` រួច។ កុំជ្រើស Next.js។

4. ចុច Deploy។
5. ពេលជោគជ័យ បើក URL ដែល Vercel ផ្ដល់ឱ្យ។ URL នេះជារបស់ Vercel ដាច់ដោយឡែកពី URL ចាស់។

បើឃើញ 404 សូមពិនិត្យថា root repository មាន `vercel.json` ហើយមាន `public/index.html` ពិត។ Output Directory ត្រូវជា `public` មិនមែន `dist` ឬ `out`។

## ៧. កែ website ពេលក្រោយ

ក្រោយកែឯកសារ និងពិនិត្យក្នុង browser រួច៖

```sh
git add .
git commit -m "Update portfolio"
git push
```

ពេល repository បានភ្ជាប់ Vercel ហើយ ការ push ទៅ production branch នឹងបង្កើត deployment ថ្មីតាម Git integration។

## ចំណាំមុខងារ

- Animation, hover effects, scroll effects និង social links មានក្នុង source នេះ។
- Contact form រៀបចំសារសម្រាប់ copy មិនផ្ញើ email និងមិនរក្សាទុកទិន្នន័យទេ។
- Telegram ជា direct contact។
- កំណែនេះមិនមាន Admin Dashboard ឬ database ទេ។
- Source នេះជាកំណែក្រហមចុងក្រោយពី website ដែលបានកែរួច។
