import { MAVEN_EXECUTABLE, MAVEN_WRAPPER_EXECUTABLE } from './constants';
import {
  BuilderCommandAliasMapper,
  BuilderCommandAliasType,
  BuilderCore,
  BuildSystem,
} from './builder-core.interface';

export class MavenBuilder implements BuilderCore {
  constructor(private commandAliases: BuilderCommandAliasMapper) {}

  getBuildSystemType() {
    return BuildSystem.MAVEN;
  }

  getExecutable(ignoreWrapper: boolean) {
    return ignoreWrapper ? MAVEN_EXECUTABLE : MAVEN_WRAPPER_EXECUTABLE;
  }

  getCommand(alias: BuilderCommandAliasType) {
    return this.commandAliases[alias];
  }
}