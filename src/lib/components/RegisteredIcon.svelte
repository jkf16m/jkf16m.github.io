<script lang="ts" module>
    export type Props = {
        name: AvailableIcons;
        size: Size;
		inline?: boolean;
    };
    export type IconObject = {
        icon?: string;
        label?: string;
        link?: string;
    }
    export type AvailableIcons =
    |"javascript"
    |"reactNative"
    |"nodejs"
    |"react"
    |"dotnet"
    |"aspnet"
    |"csharp"
    |"jquery"
    |"git"
    |"azure"
    |"angular"
    |"bootstrap"
    |"php"
    |"cpp"
    |"python"
    |"java"
    |"mssql"
    |"mysql"
    |"excel"
    |"visualbasic"
    |"oracleScm"

</script>
<script lang="ts">
	import Icon, { type Size } from "./Icon.svelte";

    let p: Props = $props();
    let iconDict: {[str in AvailableIcons]: IconObject} = {
        aspnet: {
            label: "ASP.NET",
            link: "https://dotnet.microsoft.com/es-es/learn/aspnet/what-is-aspnet",
        },
        dotnet: {
            label: '.NET',
            link: "https://dotnet.microsoft.com/es-es/",
        },
        react: {
            label: 'ReactJS',
            icon: "icon-reactjs",
            link: "https://react.dev/",
        },
        javascript: {
            label: "Javascript",
            icon: "icon-javascript-alt",
            link: "https://www.javascript.com/",
        },
        nodejs: {
            label: "NodeJS",
            icon: "icon-nodejs",
            link: "https://nodejs.org/en",
        },
        reactNative: {
            icon: "icon-reactjs",
            label: 'React Native',
            link: "https://reactnative.dev/",
        },
        csharp: {
            icon: "icon-csharp",
            link: "https://dotnet.microsoft.com/es-es/languages/csharp",
        },
        jquery:{
            label: 'JQuery',
            icon: 'icon-jquery',
            link: "https://jquery.com/",
        },
        git:{
            label: 'GIT',
            icon: 'icon-git',
            link: "https://git-scm.com/",
        },
        azure:{
            label: 'AZURE',
            icon: 'icon-azure',
            link: "https://azure.microsoft.com/es-mx",
        },
        angular:{
            label: 'Angular',
            icon: 'icon-angular',
            link: "https://angular.dev/",
        },
        bootstrap:{
            label: 'Bootstrap',
            icon: 'icon-bootstrap',
            link: "https://getbootstrap.com/",
        },
        php:{
            label: 'PHP',
            icon: 'icon-php',
            link: "https://www.php.net/",
        },
        cpp:{
            icon: 'icon-cplusplus',
            link: "https://cplusplus.com/",
        },
        python:{
            label: 'Python',
            icon: 'icon-python',
            link: "https://www.python.org/",
        },
        java:{
            label: 'Java',
            icon: 'icon-java-bold',
            link: "https://www.java.com/es/",
        },
        mssql:{
            label: 'Sql server',
            icon: 'icon-mssql',
            link: "https://www.microsoft.com/en-us/sql-server",
        },
        mysql:{
            label: 'MySql',
            icon: 'icon-mysql',
            link: "https://www.mysql.com/",
        },
        excel:{
            label: 'Excel',
            icon: 'fas fa-file-excel',
            link: 'https://www.microsoft.com/en-us/microsoft-365/excel',
        },
        visualbasic:{
            label: 'Visual Basic 6',
        },
        oracleScm: {
            label: 'Oracle SCM',
            link: 'https://www.oracle.com/mx/scm/',
        }
    }

    let selected = $derived(iconDict[p.name]);
</script>


<Icon
iconClasses={selected.icon}
label={selected.label}
size={p.size}
link={selected.link}
inline={p.inline ?? false}
/>