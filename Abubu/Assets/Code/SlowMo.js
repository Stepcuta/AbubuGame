﻿#pragma strict
var SlowSound : AudioClip;

function Start () {
}

function Update () {
	if (Input.GetMouseButtonDown(1))
	{
		if(Time.timeScale == 1.0)
		{
			Time.timeScale=0.3;
		}
		else
		{
			Time.timeScale = 1.0;
			audio.Stop();
		}
	}
	if((Time.timeScale == 0.3)&&(!audio.isPlaying))
	{
		audio.clip = SlowSound;
    	audio.Play();
	}
}