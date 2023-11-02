import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

declare let webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {
  private recognition: any;
  private voiceToTextSubject: Subject<string> = new Subject();
  private speakingPaused: Subject<any> = new Subject();
  private tempWords: string = '';
  public text = '';
  public isUserSpeaking = false;

  /**
   * @description Function to return observable so voice sample text can be send to input.
   */
  speechInput() {
    return this.voiceToTextSubject.asObservable();
  }

  /**
   * @description Function to initialize voice recognition.
   */
  init() {
    this.recognition = new webkitSpeechRecognition();
    this.recognition.interimResults = true;
    this.recognition.lang = 'pt-BR';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map(result => result.transcript)
        .join('');
      this.tempWords = transcript;
      this.voiceToTextSubject.next(this.text || transcript);
    });
    return this.initListeners();
  }

  /**
   * @description Add event listeners to get the updated input and when stopped
   */
  initListeners() {
    return this.speakingPaused.asObservable();
  }

  /**
   * @description Function to mic on to listen.
   */
  start() {
    this.text = '';
    this.isUserSpeaking = true;
    this.recognition.start();
    this.recognition.addEventListener('audioend', (condition: any) => {
      if (this.isUserSpeaking) {
        this.stop();
      } else {
        this.wordConcat();
      }
      this.voiceToTextSubject.next(this.text);
    });
  }

  /**
   * @description Function to abort recognition.
   */
  abort() {
    this.text = '';
    this.tempWords = '';
    this.isUserSpeaking = false;
    this.recognition.abort();
    this.speakingPaused.next('Aborted speaking');
  }

  /**
   * @description Function to stop recognition.
   */
  stop() {
    this.text = '';
    this.isUserSpeaking = false;
    this.wordConcat();
    this.recognition.stop();
    this.speakingPaused.next('Stopped speaking');
  }

  /**
   * @description Merge previous input with latest input.
   */
  wordConcat() {
    this.text = this.text.trim() + ' ' + this.tempWords;
    this.text = this.text.trim();
    this.tempWords = '';
  }
}
