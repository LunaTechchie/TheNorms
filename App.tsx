import React, { useState } from 'react';
import { theNormsBlueprint } from './data';
import type { Pillar, CognitiveFunction, Tool } from './types';
import Section from './components/Section';
import PillarCard from './components/PillarCard';
import CognitiveFunctionCard from './components/CognitiveFunctionCard';
import ToolChip from './components/ToolChip';
import PillarDetailModal from './components/PillarDetailModal';
import Chat from './components/Chat';
import { BrainIcon, ShieldIcon, EyeIcon, CodeBracketIcon, CpuChipIcon, MicrophoneIcon, FingerPrintIcon, ChatBotIcon } from './components/icons';

const App: React.FC = () => {
  const agi = theNormsBlueprint.theNormsAGI;
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);
  const [isChatOpen, setChatOpen] = useState(false);


  const toolCategories = {
    "Emulators & Interfaces": [
      "Web Browser Emulator",
      "Terminal Emulator",
      "Python IDE Emulator",
      "Container Emulator",
      "Voice Access",
      "API Client",
    ],
    "Development & DevOps": [
      "Selenium Web Driver",
      "Automation Orchestrator",
      "Version Control System",
      "CI/CD Trigger",
      "Database Manager",
      "Full-Stack AI Development & Deployment Platform",
      "Cloud-Native Orchestration & Resource Management",
    ],
    "AI & Cognitive Tools": [
      "Advanced Agentic & Self-Correctional Frameworks",
      "Advanced Reasoning & Knowledge Management",
      "Human-AI Collaboration & Personalization Tools",
      "Ethical AI & Safety Tools",
    ],
    "Content & File Management": [
      "Canvas (Creative Generation)",
      "Creative Content Generation Suite",
      "File Generation & Export",
    ],
  };
  
  const toolMap = React.useMemo(() =>
    new Map((agi.integratedToolSuite.tools as Tool[]).map(tool => [tool.name, tool])),
    [agi.integratedToolSuite.tools]
  );

  return (
    <div className="min-h-screen bg-slate-900/95 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 mb-2">
            {agi.identity.name}
          </h1>
          <p className="text-lg text-sky-200/90 mb-4">{agi.identity.designation}</p>
          <p className="max-w-3xl mx-auto text-slate-400">
            {agi.identity.description}
          </p>
          <div className="mt-4 text-xs text-slate-500">
            <p>Version: {agi.identity.version}</p>
            <p>{agi.identity.creator_acknowledgement}</p>
          </div>
        </header>

        <main className="space-y-16">

          <Section title={agi.corePrinciples.ethicalFramework.name} icon={<ShieldIcon className="w-6 h-6" />} subtitle={agi.corePrinciples.ethicalFramework.description}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agi.corePrinciples.ethicalFramework.pillars.map((pillar: Pillar) => (
                <PillarCard key={pillar.pillar} pillar={pillar} onSelectPillar={setSelectedPillar} />
              ))}
            </div>
          </Section>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Section title="Central Integration Logic" icon={<CpuChipIcon className="w-6 h-6" />} subtitle={agi.centralIntegrationLogic.name}>
              <p className="text-slate-400">{agi.centralIntegrationLogic.description}</p>
            </Section>
            
            <Section title="Perception System" icon={<EyeIcon className="w-6 h-6" />} subtitle={agi.perceptionSystem.name}>
               <p className="text-slate-400">{agi.perceptionSystem.synergy}</p>
            </Section>

            <Section title="Interaction Interface" icon={<MicrophoneIcon className="w-6 h-6" />} subtitle={agi.interactionInterface.name}>
              <p className="text-slate-400">{agi.interactionInterface.description}</p>
            </Section>

            <Section title="Internal Processing Protocol" icon={<FingerPrintIcon className="w-6 h-6" />} subtitle={agi.corePrinciples.internalProcessingProtocol.name}>
              <p className="text-slate-400">{agi.corePrinciples.internalProcessingProtocol.description}</p>
            </Section>
          </div>

          <Section title={agi.cognitiveArchitecture.model} icon={<BrainIcon className="w-6 h-6" />} subtitle={`Version ${agi.cognitiveArchitecture.version}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {agi.cognitiveArchitecture.subconscious_mind.cognitiveFunctions.map((func: CognitiveFunction) => (
                <CognitiveFunctionCard key={func.name} func={func} />
              ))}
            </div>
          </Section>

          <Section title="Integrated Tool Suite" icon={<CodeBracketIcon className="w-6 h-6" />} subtitle={agi.integratedToolSuite.name}>
            <div className="space-y-6">
              {Object.entries(toolCategories).map(([category, tools]) => (
                <div key={category}>
                  <h4 className="text-md font-semibold text-sky-400/80 mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {tools.map((toolName: string) => {
                       const toolData = toolMap.get(toolName);
                       return toolData ? (
                         <ToolChip key={toolData.name} tool={toolData} />
                       ) : null;
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Section>

        </main>

        <footer className="text-center mt-20 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} TheNorms AGI Blueprint. All rights reserved.</p>
        </footer>

      </div>
      {selectedPillar && <PillarDetailModal pillar={selectedPillar} onClose={() => setSelectedPillar(null)} />}
      
      <button 
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 bg-sky-500 text-white p-4 rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500"
        aria-label="Open chat with TheNorms"
      >
        <ChatBotIcon className="w-8 h-8" />
      </button>

      {isChatOpen && <Chat blueprint={agi} onClose={() => setChatOpen(false)} />}
    </div>
  );
};

export default App;