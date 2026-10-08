import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newwww',
  imports: [CommonModule,FormsModule],
  templateUrl: './newwww.component.html',
  styleUrl: './newwww.component.css'
})
export class NewwwwComponent implements OnInit, OnDestroy {

  // =========================================
  // PASSWORD
  // =========================================

  private readonly PAGE_PASSWORD = '09 october';

  password = '';
  isUnlocked = false;
  passwordError = false;


  // =========================================
  // PAGE SECTIONS
  // =========================================

  showSunflower = false;
  showChhava = false;
  showFinal = false;
  showChafaContent = false;


  // =========================================
  // MUSIC
  // =========================================

  private music = new Audio();


  // =========================================
  // PAGE LOAD
  // =========================================

  ngOnInit(): void {

    // Do NOT start music here.
    // Music will start after password is entered.

    document.addEventListener(
      'visibilitychange',
      this.handleVisibilityChange
    );
  }


  // =========================================
  // PASSWORD UNLOCK
  // =========================================

  unlockPage(): void {

    if (this.password.trim().toLowerCase() === this.PAGE_PASSWORD) {

      // Unlock page
      this.isUnlocked = true;

      // Remove error
      this.passwordError = false;

      // Start birthday music
      this.playMusic('happybirthday1.mp3');

    } else {

      // Wrong password
      this.passwordError = true;

      // Clear input
      this.password = '';
    }
  }


  // =========================================
  // TAB CHANGE
  // =========================================

  private handleVisibilityChange = (): void => {

    // User leaves browser tab
    if (document.hidden) {

      this.music.pause();

    }

    // User comes back
    else if (this.isUnlocked) {

      this.music.play().catch(error => {

        console.log(
          'Music could not resume:',
          error
        );

      });

    }
  };


  // =========================================
  // PLAY MUSIC
  // =========================================

  playMusic(song: string): void {

    // Stop previous song
    this.music.pause();

    this.music.currentTime = 0;

    // Every new song starts without loop
    this.music.loop = false;

    // Set new song
    this.music.src = `assets/music/${song}`;

    // Volume
    this.music.volume = 0.35;

    // Play
    this.music.play().catch(error => {

      console.log(
        'Music could not play:',
        error
      );

    });
  }


  // =========================================
  // SUNFLOWER
  // =========================================

  openSunflower(): void {

    // Birthday → Sunflower music
    this.playMusic('yellow2.mp3');

    // Show sunflower section
    this.showSunflower = true;

    setTimeout(() => {

      document.getElementById('sunflower-section')
        ?.scrollIntoView({

          behavior: 'smooth',

          block: 'center'

        });

    }, 100);
  }


  // =========================================
  // CHHAVA
  // =========================================

  openChhava(): void {

    // Show Chhava section
    this.showChhava = true;

    // Keep Chafa hidden
    this.showChafaContent = false;

    setTimeout(() => {

      document.getElementById('chhava-section')
        ?.scrollIntoView({

          behavior: 'smooth',

          block: 'center'

        });

    }, 100);
  }


  // =========================================
  // CHAFA
  // =========================================

  openChafaContent(): void {

    // Change Sunflower music → Chafa music
    this.playMusic('chafa3.mp3');

    // Show Chafa content
    this.showChafaContent = true;
  }


  // =========================================
  // FINAL
  // =========================================

  openFinal(): void {

    // Change Chafa music → Final music
    this.playMusic('jyr4.mp3');

    // 🔁 Final song loops forever
    this.music.loop = true;

    // Show final section
    this.showFinal = true;

    setTimeout(() => {

      document.getElementById('final-section')
        ?.scrollIntoView({

          behavior: 'smooth',

          block: 'start'

        });

    }, 100);
  }


  // =========================================
  // COMPONENT DESTROY
  // =========================================

  ngOnDestroy(): void {

    // Remove browser tab listener
    document.removeEventListener(
      'visibilitychange',
      this.handleVisibilityChange
    );

    // Stop music
    this.music.pause();
  }

}