import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SafeUrlPipe } from '../pipes/videos.pipe';

@Component({
    selector: 'video-format',
    template: `
        <iframe *ngIf="embedUrl" [src]="embedUrl | safeUrl" frameborder="0" allowfullscreen></iframe>
    `,
    standalone:true,
    imports:[CommonModule, SafeUrlPipe,]
})
export class VideoFormatComponent implements OnInit {
    @Input() url!:string;
    public embedUrl!: string;
    constructor() { }

    ngOnInit(): void { 
        this.embedUrl = this.getEmbedUrl(this.url);
    }

    getEmbedUrl(url: string): string {
        const youtubePattern = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(youtubePattern);
        if (match && match[1]) {
          return `https://www.youtube.com/embed/${match[1]}`;
        }
        return '';
    }
}
