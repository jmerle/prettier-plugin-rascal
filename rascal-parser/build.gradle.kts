import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar
import org.apache.commons.io.FileUtils
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
import java.net.URL

plugins {
  kotlin("jvm") version "1.3.71"
  id("com.github.johnrengelman.shadow") version "5.2.0"
}

buildscript {
  repositories {
    jcenter()
  }

  dependencies {
    classpath("commons-io:commons-io:2.6")
  }
}

group = "com.jaspervanmerle.rascalparser"
version = "1.0.0"

repositories {
  jcenter()
}

fun jarFromUrl(url: String): ConfigurableFileCollection {
  val file = File("$buildDir/downloads/${url.split("/").last()}")

  if (!file.exists()) {
    file.parentFile.mkdirs()
    println("Downloading $url")
    FileUtils.copyURLToFile(URL(url), file)
  }

  return files(file.absolutePath)
}

dependencies {
  implementation(kotlin("stdlib-jdk8"))
  implementation(jarFromUrl("https://update.rascal-mpl.org/console/rascal-0.16.3.jar"))
  implementation("com.github.salomonbrys.kotson:kotson:2.5.0")
}

tasks {
  withType<KotlinCompile> {
    kotlinOptions.jvmTarget = "1.8"
  }

  named<ShadowJar>("shadowJar") {
    archiveClassifier.set("")
    archiveVersion.set("")
    destinationDirectory.set(file("$rootDir/../dist"))

    manifest {
      attributes(mapOf("Main-Class" to "com.jaspervanmerle.rascalparser.RascalParser"))
    }
  }
}
