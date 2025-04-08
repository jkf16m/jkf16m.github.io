<script lang="ts">
    import Experience from "$lib/components/Experience.svelte";
    import { i18n } from "$lib/localization.svelte";
</script>

<article>
    <header><h2 id="experience">{$i18n.t('page.experience.nav')}</h2></header>

    <div class="grid">
        <Experience 
            remarksCount={4}
            translationKey={"oxxogas2"}
            role={"developer"}
            secondaryRole={'fullstack'}
            mainTechnology='reactNative'
            usedTechnologies={[
                'reactNative',
                "aspnet",
                "dotnet",
                "csharp",
                "javascript",
                "nodejs",
                "mssql"
            ]}
        />
    </div>
    <div class="grid">
        <Experience
            remarksCount={4}
            translationKey={"oxxogas1"}
            role={'developer'}
            secondaryRole={'frontend'}
            mainTechnology='reactNative'
            usedTechnologies={[
                'reactNative',
                "aspnet",
                "dotnet",
                "csharp",
                "javascript",
                "nodejs",
                "mssql"
            ]}
        />
    </div>
    <div class="grid">
        
        <Experience
            remarksCount={4}
            translationKey={'pictale'}
            role={'leadDeveloper'}
            secondaryRole={"developer"}
            mainTechnology={'reactNative'}
            usedTechnologies={[
                'javascript',
                'csharp',
                'nodejs',
            ]}
        />
        <Experience
            remarksCount={3}
            translationKey='ingeniosys'
            secondaryRole="developer"
            role="fullstack"
            mainTechnology="dotnet"
            usedTechnologies={[
                'javascript',
                'csharp',
                "aspnet",
                'jquery',
            ]}
        />
    </div>
    <div class="grid">
        <Experience
            remarksCount={3}
            translationKey='simpatTech'
            secondaryRole='developer'
            role='maintainer'
            mainTechnology='csharp'
            usedTechnologies={[
                'azure',
                'mssql',
                'javascript',
                'nodejs',
            ]}
        />
        <Experience
            remarksCount={4}
            translationKey='ravisa'
            secondaryRole='developer'
            role='technicalSupport'
            mainTechnology='aspnet'
            usedTechnologies={[
                'csharp',
                'mssql',
                'react',
                'javascript',
                'python',
            ]}
        />
    </div>
    <Experience
        remarksCount={3}
        translationKey='haloCreativeAndDesign'
        secondaryRole='helper'
        role='engineer'
        mainTechnology='oracleScm'
        usedTechnologies={[
            'mssql',
            'python',
            'excel',
            'visualbasic',
        ]}
    />
</article>