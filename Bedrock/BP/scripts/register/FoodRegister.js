var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

import { ItemCompleteUseAfterEvent, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";

const NEGATIVE_EFFECTS = [
    "poison", "wither", "hunger", "slowness", "weakness",
    "blindness", "darkness", "nausea", "mining_fatigue"
];

function clearNegativeEffects(player) {
    for (const eff of NEGATIVE_EFFECTS) {
        player.removeEffect(eff);
    }
}

function clearAllEffects(player) {
    for (const eff of player.getEffects()) {
        player.removeEffect(eff.typeId);
    }
}

function applyMarmaladeEffect(player) {
    if (Math.random() < 0.10) {
        player.addEffect("regeneration", 150, { amplifier: 0 });
    } else if (Math.random() < 0.30) {
        player.addEffect("jump_boost", 150, { amplifier: 0 });
    } else if (Math.random() < 0.20) {
        player.addEffect("speed", 150, { amplifier: 0 });
    } else if (Math.random() < 0.15) {
        player.addEffect("strength", 150, { amplifier: 0 });
    } else if (Math.random() < 0.05) {
        player.addEffect("haste", 600, { amplifier: 1 });
    } else {
        player.addEffect("luck", 6000, { amplifier: 0 });
    }
}

export class FoodRegister {
    static onConsume(event) {
        if (event.useDuration) return;
        const player = event.source;
        const itemStack = event.itemStack;
        if (!player || !itemStack) return;

        const itemId = itemStack.typeId;

        switch (itemId) {
            case "sweet_delight:applecupcake":
                player.addEffect("absorption", 600, { amplifier: 0 });
                break;

            case "sweet_delight:bitterchocolate":
                player.addEffect("health_boost", 100, { amplifier: 0 });
                player.addEffect("regeneration", 100, { amplifier: 0 });
                break;

            case "sweet_delight:chakchak":
                player.addEffect("saturation", 20, { amplifier: 0 });
                break;

            case "sweet_delight:chocolateapple":
            case "sweet_delight:chocolate":
                player.addEffect("regeneration", 100, { amplifier: 0 });
                player.addEffect("speed", 100, { amplifier: 0 });
                break;

            case "sweet_delight:chocolateglaze":
                player.addEffect("speed", 200, { amplifier: 0 });
                player.addEffect("instant_health", 1, { amplifier: 0 });
                break;

            case "sweet_delight:chocolateicecream":
                player.addEffect("speed", 100, { amplifier: 0 });
                try { player.extinguishFire(true); } catch (e) { }
                break;

            case "sweet_delight:chocolaterabbit":
                player.addEffect("speed", 600, { amplifier: 0 });
                player.addEffect("jump_boost", 600, { amplifier: 0 });
                break;

            case "sweet_delight:chocolatecroussant":
            case "sweet_delight:chocolateeclair":
                player.addEffect("speed", 120, { amplifier: 0 });
                break;

            case "sweet_delight:cleanchocolate":
                player.addEffect("regeneration", 100, { amplifier: 0 });
                break;

            case "sweet_delight:condensedmilk":
                clearAllEffects(player);
                player.addEffect("instant_health", 1, { amplifier: 0 });
                break;

            case "sweet_delight:ginderbreadheart":
                player.addEffect("health_boost", 300, { amplifier: 1 });
                player.addEffect("regeneration", 20, { amplifier: 0 });
                break;

            case "sweet_delight:ginderbreadingot":
                player.addEffect("resistance", 120, { amplifier: 0 });
                break;

            case "sweet_delight:ginderbreadspruce":
                player.addEffect("speed", 60, { amplifier: 0 });
                player.addEffect("jump_boost", 60, { amplifier: 0 });
                break;

            case "sweet_delight:glow_berry_cupcake":
            case "sweet_delight:glowberrypretzel":
                player.addEffect("night_vision", 60, { amplifier: 0 });
                break;

            case "sweet_delight:glowberriesicecream":
                player.addEffect("instant_health", 1, { amplifier: 0 });
                player.addEffect("night_vision", 60, { amplifier: 0 });
                try { player.extinguishFire(true); } catch (e) { }
                break;

            case "sweet_delight:goldencockere":
            case "sweet_delight:goldenpieslice":
                player.addEffect("absorption", 60, { amplifier: 1 });
                break;

            case "sweet_delight:goldenpie":
                player.addEffect("strength", 150, { amplifier: 0 });
                player.addEffect("absorption", 600, { amplifier: 2 });
                player.addEffect("speed", 80, { amplifier: 0 });
                break;

            case "sweet_delight:honeyapple":
            case "sweet_delight:honeyballs":
            case "sweet_delight:honeycaramel":
            case "sweet_delight:honeyeclair":
            case "sweet_delight:honeypancakes":
            case "sweet_delight:honeypie":
            case "sweet_delight:honeypieslice":
            case "sweet_delight:honeypretzel":
                clearNegativeEffects(player);
                break;

            case "sweet_delight:irispie":
                player.addEffect("instant_health", 1, { amplifier: 1 });
                break;

            case "sweet_delight:milkchocolate":
                clearAllEffects(player);
                player.addEffect("regeneration", 100, { amplifier: 0 });
                break;

            case "sweet_delight:milkeclair":
                clearAllEffects(player);
                break;

            case "sweet_delight:milk_ice_cream":
                clearAllEffects(player);
                try { player.extinguishFire(true); } catch (e) { }
                break;

            case "sweet_delight:sunflowerhalva":
                player.addEffect("slowness", 240, { amplifier: 1 });
                player.addEffect("nausea", 40, { amplifier: 1 });
                break;

            case "sweet_delight:poppyhalva":
                player.addEffect("slowness", 240, { amplifier: 0 });
                player.addEffect("nausea", 40, { amplifier: 1 });
                break;

            case "sweet_delight:pudding":
                player.addEffect("jump_boost", 600, { amplifier: 0 });
                break;

            case "sweet_delight:rolledoutwheatdough":
                player.addEffect("hunger", 60, { amplifier: 1 });
                player.addEffect("nausea", 60, { amplifier: 1 });
                break;

            case "sweet_delight:snowy_ice_cream":
                player.addEffect("slowness", 240, { amplifier: 0 });
                try { player.extinguishFire(true); } catch (e) { }
                break;

            case "sweet_delight:sweetberrychocolate":
                player.addEffect("regeneration", 100, { amplifier: 0 });
                player.addEffect("instant_health", 1, { amplifier: 0 });
                break;

            case "sweet_delight:sweetberryicecream":
                player.addEffect("instant_health", 1, { amplifier: 0 });
                try { player.extinguishFire(true); } catch (e) { }
                break;

            case "sweet_delight:caramel_cockere":
            case "sweet_delight:iris":
            case "sweet_delight:irispieslice":
            case "sweet_delight:lolipop":
            case "sweet_delight:sweetberrycroussant":
            case "sweet_delight:sweetberrycupcake":
            case "sweet_delight:sweetberrypie":
            case "sweet_delight:sweetberrypieslice":
            case "sweet_delight:sweetberrypretzel":
                player.addEffect("instant_health", 1, { amplifier: 0 });
                break;

            case "sweet_delight:redmarmalade":
            case "sweet_delight:orangemarmalade":
            case "sweet_delight:yellowmarmalade":
            case "sweet_delight:limemarmalade":
            case "sweet_delight:greenmarmalade":
            case "sweet_delight:lightbluemarmalade":
            case "sweet_delight:bluemarmalade":
            case "sweet_delight:cyanmarmalade":
            case "sweet_delight:purplemarmalade":
            case "sweet_delight:magentamarmalade":
            case "sweet_delight:pinkmarmalade":
            case "sweet_delight:brownmarmalade":
                applyMarmaladeEffect(player);
                break;
        }
    }
}

__decorate([
    EventAPI.register(world.afterEvents.itemCompleteUse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ItemCompleteUseAfterEvent]),
    __metadata("design:returntype", void 0)
], FoodRegister, "onConsume", null);